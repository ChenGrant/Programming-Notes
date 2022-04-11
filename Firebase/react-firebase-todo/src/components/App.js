import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Todo from "./Todo/Todo";
import { UserProvider } from "../contexts/AuthContext";

function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
