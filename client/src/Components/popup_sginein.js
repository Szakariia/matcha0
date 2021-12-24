import React, { useState } from "react";
import Popup_ForgetPass from "./popup_ForgetPass.js.js";

function Popup(props) {
  // variables for inputs values

  const [forgetpass, setForgetpass] = useState(false);
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  const updateField = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };
  console.log(inputValues);
  return props.trigger ? (
    !forgetpass ? (
      <div className=" absolute bg-black bg-opacity-50 h-screen w-screen flex items-center justify-center">
        <div className="rounded-lg shadow-lg bg-primary py-5 px-7 text-5">
          {/* // HEADER // */}

          <div className="flex justify-between p-2">
            <button className="flex" onClick={() => props.setTrigger(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-5">
            Sign in to your account
          </h2>

          {/* // INPUTS // */}

          <div className="mt-10">
            <label className="block">
              <span className="text-5">Email</span>
              <input
                className=" focus:outline-none focus: focus:ring focus:ring-purple-200	 text-black form-input mt-1 rounded-lg block w-full p-2"
                placeholder="john@example.com"
                name="email"
                value={inputValues.email}
                onChange={updateField}
              />
            </label>
            <label className="block mt-5">
              <span className="text-5">Password</span>
              <input
                className=" focus:outline-none focus: focus:ring focus:ring-purple-200	 text-black form-input mt-1 rounded-lg block w-full p-2"
                type="password"
                placeholder="password"
                name="password"
                value={inputValues.password}
                onChange={updateField}
              />
            </label>
          </div>

          {/* // FOOTER // */}

          <div className="flex justify-between p-2">
            <button className="mt-10 mb-5 bg-primary_2 rounded-md text-primary px-3 py-1.5">
              <span> Sign in </span>
            </button>
            <button
              className="flex mt-10 mb-5rounded-md text-5 px-3 py-1.5"
              onClick={() => setForgetpass(true)}
            >
              <span> Forgot passsword ? </span>
            </button>
          </div>
        </div>
      </div>
    ) : (
      <popup_ForgetPass setTrigger={props.setTrigger} />
    )
  ) : (
    ""
  );
}
export default Popup;
