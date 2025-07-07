// root components
// app.js -> index.js -> public/index.html(root)
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">主页</Link>
        <Link to="/register">注册</Link>
        <Link to="/login">登录</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
    </Router>
  );
}

export default App;
