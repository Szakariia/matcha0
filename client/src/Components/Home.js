import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const Navigate = useNavigate();

  return (
    <div className="mt-40">
      <div className=" bg-gray-200 opacity-80 p-20 rounded-full max-w-6xl mx-auto text-center ">
        <h2 className=" text-6xl font-extrabold ">
          DATING FOR EVERY
          <br />
          SINGLE PERSON
        </h2>

        <p className="mt-5  text-3xl ">
          Matcha is the only dating app that matches you on what matters to you.
          <br />
          You deserve to find who you’re looking for.
          <br />
          Meet them today!
        </p>

        <button
          className="mt-8 bg-black w-40 hover:bg-transparent text-white font-semibold hover:text-primary py-2 px-4 border border-gray-200 hover:border-black rounded"
          onClick={() => Navigate("/register")}
        >
          Join us
        </button>
      </div>
    </div>
  );
}

export default Home;
