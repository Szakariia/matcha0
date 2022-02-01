import React, { useState, useEffect, useRef } from "react";
import Img from "../../img/signup_img.jpeg";
import validator from "../../Utils/Validator";

import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../Actions/UserActions";
import { Link } from "react-router-dom";

function Register() {
  // defined Variable
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userReducers);
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });
  const [errorValidator, seterrorValidator] = useState({});
  const firstUpdate = useRef(true);

  // update inputes Value
  const updateField = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  // Get new errors
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    const error = validator(inputValues, false);
    seterrorValidator({ ...errorValidator, error });
  }, [inputValues]);

  // handel submit form
  function handleSubmit(e) {
    console.log("we dispatch the action ");
    e.preventDefault();
    dispatch(registerAction(inputValues));
  }
  console.log("the is the state ", state);
  return (
    <form onSubmit={handleSubmit}>
      <div className=" bg-gray-200 flex items-center justify-center h-screen">
        <div className="bg-white rounded-3xl  max-w-6xl mx-auto grid grid-cols-3 w-screen ">
          <div className="flex items-center mx-auto">
            <img className="img h-full w-full rounded-3xl" src={Img} alt="" />
          </div>
          <div className="col-span-2 p-20 justify-items-center">
            {state.successRequest ? (
              <div className="grid justify-items-center space-y-12">
                <h2 className="text-center text-5xl font-extrabold text-primary">
                  REGISTRATION SUCCESS
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="center-items h-40 w-40 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="text-center">
                  {" "}
                  Please confirm Your email adresse
                </span>
                <button className="bg-primary w-1/3 hover:bg-white text-white font-semibold hover:text-primary py-2 px-4 border border-primary hover:border-black rounded">
                  Done
                </button>
              </div>
            ) : (
              <>
                {/* HEADER */}

                <h2 className="text-center text-5xl font-extrabold text-primary">
                  REGISTER
                </h2>

                {/* BODY */}

                <div className="mt-10 space-y-5 ">
                  <div className="grid grid-cols-2 space-x-4">
                    {/* firstNname */}

                    <label className=" items-center">
                      <span className="text-primary font-bold ">
                        First name
                      </span>
                      <input
                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${
                          (state.messageError &&
                            state.messageError.firstName) ||
                          errorValidator.error?.firstName
                            ? "border border-red-500"
                            : "border"
                        } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                        placeholder="john"
                        name="firstName"
                        value={inputValues.firstName}
                        onChange={updateField}
                      />
                      {(state.messageError && state.messageError.firstName) ||
                      errorValidator.error?.firstName ? (
                        <p className="mb-2 text-red-500 text-xs italic">
                          {errorValidator.error?.firstName
                            ? errorValidator.error?.firstName
                            : state.messageError.firstName}
                        </p>
                      ) : (
                        ""
                      )}
                    </label>

                    {/* lastName */}

                    <label className="items-center">
                      <span className="text-primary font-bold ">Last name</span>
                      <input
                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${
                          (state.messageError && state.messageError.lastName) ||
                          errorValidator.error?.lastName
                            ? "border border-red-500"
                            : "border"
                        } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                        placeholder="Tate"
                        name="lastName"
                        value={inputValues.lastName}
                        onChange={updateField}
                      />
                      {(state.messageError && state.messageError.lastName) ||
                      errorValidator.error?.lastName ? (
                        <p className="mb-2 text-red-500 text-xs italic">
                          {errorValidator.error?.lastName
                            ? errorValidator.error?.lastName
                            : state.messageError.lastName}
                        </p>
                      ) : (
                        ""
                      )}
                    </label>
                  </div>

                  {/* username */}

                  <label className="items-center">
                    <span className="text-primary font-bold ">Username</span>
                    <input
                      className={`appearance-none block w-full bg-gray-200 text-gray-700 ${
                        (state.messageError && state.messageError.username) ||
                        errorValidator.error?.username
                          ? "border border-red-500"
                          : "border"
                      } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                      placeholder="Tjohn"
                      name="username"
                      value={inputValues.username}
                      onChange={updateField}
                    />
                    {(state.messageError && state.messageError.username) ||
                    errorValidator.error?.username ? (
                      <p className="mb-2 text-red-500 text-xs italic">
                        {errorValidator.error?.username
                          ? errorValidator.error?.username
                          : state.messageError.username}
                      </p>
                    ) : (
                      ""
                    )}
                  </label>

                  {/* email */}

                  <label className="items-center">
                    <span className="text-primary font-bold ">Email</span>
                    <input
                      className={`appearance-none block w-full bg-gray-200 text-gray-700 ${
                        (state.messageError && state.messageError.email) ||
                        errorValidator.error?.email
                          ? "border border-red-500"
                          : "border"
                      } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                      placeholder="john@example.com"
                      name="email"
                      value={inputValues.email}
                      onChange={updateField}
                    />
                    {(state.messageError && state.messageError.email) ||
                    errorValidator.error?.email ? (
                      <p className="mb-2 text-red-500 text-xs italic">
                        {errorValidator.error?.email
                          ? errorValidator.error?.email
                          : state.messageError.email}
                      </p>
                    ) : (
                      ""
                    )}
                  </label>

                  {/* password */}

                  <label className="items-center">
                    <span className="text-primary font-bold ">Passsword</span>
                    <input
                      className={`appearance-none block w-full bg-gray-200 text-gray-700 ${
                        (state.messageError && state.messageError.password) ||
                        errorValidator.error?.password
                          ? "border border-red-500"
                          : "border"
                      } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                      type="password"
                      placeholder="************"
                      name="password"
                      value={inputValues.password}
                      onChange={updateField}
                    />
                    {(state.messageError && state.messageError.password) ||
                    errorValidator.error?.password ? (
                      <p className="mb-2 text-red-500 text-xs italic">
                        {errorValidator.error?.password
                          ? errorValidator.error?.password
                          : state.messageError.password}
                      </p>
                    ) : (
                      ""
                    )}
                  </label>

                  {/* FOOTER */}

                  <div className="grid grid-rows-2">
                    <button
                      className={`py-2 px-4 font-semibold  w-1/3 rounded ${
                        errorValidator.error || firstUpdate.current
                          ? " cursor-not-allowed bg-gray-200 text-gray-400 border border-gray-200 "
                          : "hover:bg-white text-white bg-primary border border-primary hover:text-primary  hover:border-black"
                      } `}
                      type="submit"
                      disabled={
                        errorValidator.error || firstUpdate.current
                          ? true
                          : false
                      }
                    >
                      Sign up
                    </button>
                    <span className="mt-2 text-gray-500">
                      {" "}
                      Already a member?{" "}
                      <Link className="font-bold text-primary" to="/login">
                        {" "}
                        Login{" "}
                      </Link>
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}

// appearance-none to reset any browser specific styling on an element.

export default Register;
