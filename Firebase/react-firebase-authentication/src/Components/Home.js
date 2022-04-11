import Login from "./Login";
import Todo from "./Todo";
import { useUser } from "../contexts/AuthContext";

const Home = () => {
  const user = useUser();
  
  if (user) return <Todo />;

  return (
    <>
      <h1>Home</h1>
      <Login />
    </>
  );
};

export default Home;
