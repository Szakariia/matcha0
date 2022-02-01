import Navbar from "./Components/Navbar/Navbar";

import Home from "./Components/Home";
import Discover from "./Components/Discover";
import Likes from "./Components/Likes";
import Messages from "./Components/Messages";

import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoute from "./services/authRoutes";

function App() {
  return (
    <div className=" bg-no-repeat bg-cover min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          {/* PUBLIC ROUTES */}

          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />

          {/* PRIVATE ROUTES */}
          <Route
            exact
            path="/Discover"
            element={
              <PrivateRoute>
                <Discover />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/likes"
            element={
              <PrivateRoute>
                <Likes />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/messages"
            element={
              <PrivateRoute>
                <Messages />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
