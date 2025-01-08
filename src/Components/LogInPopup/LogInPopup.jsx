import React, { useState } from "react";
import { assets } from "../../assets/assets";

const LogInPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="logIn-Popup absolute z-10 w-full h-full bg-[#00000090] grid">
      <form className="login-popup-container place-self-center w-80  text-[#808080] bg-white flex flex-col gap-2 p-5 rounded-md text-xs">
        <div className="login-popup-title flex justify-between">
          <h2 className="font-medium text-xl ">{currState}</h2>
          <img
            className="w-4 h-4 cursor-pointer"
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs flex flex-col gap-2">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              className="border-zinc-300 px-3 w-60 py-2 rounded-full border-2"
              type="text"
              placeholder="Your Name"
              required
            />
          )}
          <input
            className="border-zinc-300 px-3 w-60 py-2 rounded-full border-2"
            type="email"
            placeholder="Your Email"
            required
          />
          <input
            className="border-zinc-300 px-3 w-60 py-2 rounded-full border-2"
            type="password"
            placeholder="Your Password "
            required
          />
        </div>
        <button className="px-3 py-2 w-60 bg-red-500 rounded-full text-white">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition flex items-start gap-2">
          <input className="mt-0.5" type="checkbox" required />
          <p>By continuing, i agree to the term of use a privecy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new Account ?{" "}
            <span
              className="cursor-pointer font-medium text-red-500"
              onClick={() => setCurrState("Sign Up")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an Account?{" "}
            <span
              className="cursor-pointer font-medium text-red-500"
              onClick={() => setCurrState("Login")}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LogInPopup;
