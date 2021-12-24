import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Img from "../../img/signup_img.jpeg";
import { loginAction } from "../../Actions/UserActions";
import validator from "../../Utils/Validator";
import { Navigate } from "react-router";

import { Link } from "react-router-dom";
function Login() {
  // defined Variable
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userReducers);
  const [errorValidator, seterrorValidator] = useState({});
  const [inputValues, setInputValues] = useState({
    username: "",
    password: "",
  });

  // upadate
  const updateField = (e) => {
    // update inputes Value
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputValidation = (event) => {
    seterrorValidator(validator(inputValues, true));
    console.log(errorValidator);
  };
  // handel submit form
  function handleSubmit() {
    dispatch(loginAction(inputValues));
  }
  // console.log(errorValidator, inputValues);
  return state?.isLoggedIn ? (
    <Navigate to="/" />
  ) : (
    <form onSubmit={handleSubmit}>
      <div className=" bg-gray-200 flex items-center justify-center h-screen">
        <div className="bg-white rounded-3xl  max-w-6xl mx-auto grid grid-cols-3 w-screen ">
          {/* LEFT SIDE */}

          <div className="flex items-center mx-auto">
            <img className="img h-full w-full rounded-3xl" src={Img} alt="" />
          </div>

          {/* RIGHT SIDE */}

          <div className="col-span-2 p-20 justify-items-center">
            {/* HEADER */}

            <h2 className="text-center text-5xl font-extrabold text-primary">
              LOGIN
            </h2>
            {state.messageError ? (
              <div className=" mt-5 text-red-500 text-center">
                <span className="text-red ">{state.messageError}</span>
              </div>
            ) : (
              ""
            )}

            {/* BODY */}

            <div className="mt-10 space-y-5 ">
              <label className="items-center">
                <span className="text-primary font-bold">Username</span>
                <input
                  class={`appearance-none block w-full bg-gray-200 text-gray-700 ${
                    state.messageError || errorValidator?.username
                      ? "border border-red-500"
                      : "border"
                  } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                  placeholder="Tjohn"
                  name="username"
                  value={inputValues.username}
                  onChange={updateField}
                  onBlur={handleInputValidation}
                />
                {errorValidator?.username ? (
                  <p className="mb-2 text-red-500 text-xs italic">
                    {errorValidator?.username}
                  </p>
                ) : (
                  ""
                )}
              </label>

              <label className="items-center">
                <span className="text-primary font-bold ">Passsword</span>
                <input
                  class={`appearance-none block w-full bg-gray-200 text-gray-700 ${
                    state.messageError || errorValidator?.password
                      ? "border border-red-500"
                      : "border"
                  } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                  type="password"
                  placeholder="************"
                  name="password"
                  value={inputValues.password}
                  onChange={updateField}
                  onBlur={handleInputValidation}
                />
                {errorValidator?.password ? (
                  <p className="mb-2 text-red-500 text-xs italic">
                    {errorValidator?.password}
                  </p>
                ) : (
                  ""
                )}
              </label>

              {/* FOOTER */}

              <div className="grid grid-rows-2 place-content-center">
                <button
                  className={`py-2 px-4 font-semibold  rounded ${
                    errorValidator
                      ? " cursor-not-allowed bg-gray-200 text-gray-400 border border-gray-200 "
                      : "hover:bg-white text-white bg-primary border border-primary hover:text-primary  hover:border-black"
                  } `}
                  type="submit"
                  // disabled={inButton}
                >
                  Login
                </button>
                <span className="mt-2 text-gray-500">
                  {" "}
                  Don't have an account?{" "}
                  <Link className="font-bold text-primary" to="/register">
                    {" "}
                    Register{" "}
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
export default Login;

// 1 - appearance-none to reset any browser specific styling on an element.
// Feat Chore Fix Refact
