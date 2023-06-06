import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import UserDetails from "./component/UserDetails";
import Login from "./component/Login";
import Register from "./component/Register";

function App() {



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userdetails" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
