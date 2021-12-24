import Navbar from "./Components/Navbar/Navbar";
import AuthNavbar from "./Components/Navbar/AuthNavbar";

import Home from "./Components/Home";
import Discover from "./Components/Discover";
import Likes from "./Components/Likes";
import Messages from "./Components/Messages";

import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import authlocalStorage from "./Auth";

function App() {
  const state = useSelector((state) => state.userReducers);
  console.log("test");
  return (
    <div className=" bg-no-repeat bg-cover min-h-screen">
      <Router>
        {state?.isLoggedIn ? <AuthNavbar /> : <Navbar />}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/likes" element={<Likes />} />
          <Route path="/messages" element={<Messages />} />

          {/* <Route path="" component={}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
