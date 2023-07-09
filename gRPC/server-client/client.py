import grpc
import asyncio
import file_transfer_pb2
import file_transfer_pb2_grpc

async def file_upload_client():
    with grpc.aio.insecure_channel('localhost:50051') as channel:
        # Create a stub (client)
        stub = file_transfer_pb2_grpc.FileTransferStub(channel)
        
        def get_request_iterator():
            with open('./sample.txt', 'rb') as f:
                for chunk in iter(lambda: f.read(4096), b''):
                    yield file_transfer_pb2.FileChunk(chunk=chunk)
        
        response = stub.UploadFile(get_request_iterator())
        print(response)
                    

if __name__ == '__main__':
    asyncio.run(file_upload_client())
    print("yes")
