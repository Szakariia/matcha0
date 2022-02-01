import React from "react";
import AuthNavbar from "./AuthNavbar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const Navigate = useNavigate();
  const state = useSelector((state) => state.userReducers);
  return state?.isLoggedIn ? (
    <AuthNavbar />
  ) : (
    <div>
      <div className=" bg-primary">
        <div className="max-w-6xl mx-auto text-primary_2">
          <div className="flex justify-between p-4">
            <div className=" flex space-x-5 mt-1.5 ">
              <button
                className="pr-20 text-white text-center text-3xl font-extrabold"
                onClick={() => Navigate("/")}
              >
                LOGO
              </button>
            </div>

            <div className="flex space-x-5 ">
              <div className="space-x-4">
                <span className="text-gray-200 "> Have an account? </span>
                <button
                  onClick={() => Navigate("/login")}
                  className="bg-white text-primary font-semibold  py-2 px-4 border border-primary hover:text-white hover:border-white hover:bg-primary  rounded"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
