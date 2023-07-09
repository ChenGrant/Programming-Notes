import grpc
from concurrent import futures
import file_transfer_pb2
import file_transfer_pb2_grpc
import time

class FileTransferServicer(file_transfer_pb2_grpc.FileTransferServicer):
    def __init__(self):
        self.file_path = 'uploaded_file.bin'

    def UploadFile(self, request_iterator, context):
        with open(self.file_path, 'wb') as f:
            for request in request_iterator:
                f.write(request.chunk)
        time.sleep(3)
        return file_transfer_pb2.FileUploadStatus(success=True)

def serve():
    # Create a gRPC server
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))

    # Register the servicer
    file_transfer_pb2_grpc.add_FileTransferServicer_to_server(FileTransferServicer(), server)

    # Start the server
    server.add_insecure_port('[::]:50051')
    server.start()
    print("Server started. Listening on port 50051.")

    # Wait for the server to finish (optional)
    server.wait_for_termination()

if __name__ == '__main__':
    serve()
