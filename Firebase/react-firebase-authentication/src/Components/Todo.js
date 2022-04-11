import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Todo = () => {
  return (
    <>
      <div>Successfully Logged In</div>
      <button onClick={() => signOut(auth)}>Logout</button>
    </>
  );
};

export default Todo;
