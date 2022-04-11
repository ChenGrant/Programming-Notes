import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Todo from "./Todo";
import { UserProvider } from "../contexts/AuthContext";
import InvalidPath from "./InvalidPath";

function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="*" element={<InvalidPath />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
