import { useUser } from "../../contexts/AuthContext";
import { useRef, useState } from "react";
import { db, storage } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import uuid from "react-uuid";

const AddTodo = () => {
  const user = useUser();
  const [addTodo, setAddTodo] = useState("");
  const [progress, setProgress] = useState(100);
  const addTodoRef = useRef();
  const fileRef = useRef();

  const addTodoEnterHandler = async (event) => {
    const newTodo = addTodoRef.current.value.trim();
    if (event.key !== "Enter" || newTodo === "") return;

    const todosColRef = collection(db, "todos", user.uid, "todos");
    const currentTime = serverTimestamp();
    const newDoc = {
      user: user.uid,
      todo: newTodo,
      createdAt: currentTime,
      lastEdited: currentTime,
      files: [],
    };

    if (fileRef.current.files.length === 0) {
      await addDoc(todosColRef, newDoc);
      setAddTodo("");
      fileRef.current.value = null;
      return;
    }

    const file = fileRef.current.files[0];
    const fileStorageRef = ref(storage, `${user.uid}/${file.name}`);
    const uploadTask = uploadBytesResumable(fileStorageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setProgress(
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 99)
        );
      },
      (err) => console.log(err),
      async () => {
        newDoc.files.push({
          name: file.name,
          id: uuid(),
          url: await getDownloadURL(uploadTask.snapshot.ref),
        });
        await addDoc(todosColRef, newDoc);
        setProgress(100);
        setAddTodo("");
      }
    );
  };

  if (progress !== 100) {
    return <p>Uploading {progress} %</p>;
  }

  return (
    <div>
      <label>Add to do:</label>
      <input
        ref={addTodoRef}
        value={addTodo}
        onChange={() => setAddTodo(addTodoRef.current.value)}
        onKeyDown={addTodoEnterHandler}
      />
      <input ref={fileRef} type="file" multiple/>
    </div>
  );
};

export default AddTodo;
