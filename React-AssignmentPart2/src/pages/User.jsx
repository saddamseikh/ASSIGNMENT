import React from "react";
import { useState } from "react";
import logo from "../assets/instagram.png";
export default function User() {
  const [login, setlogin] = useState(true);

  const loginSwitch = () => {
    setlogin(!login);
  };
  return (
    <>
      <div id="Container" className="flex flex-col items-center mt-4">
        <form
          id="user"
          className="flex flex-col gap-2 rounded-lg border p-5 shadow-[10px_10px_5px_gray]"
        >
          <img src={logo} alt="" />
          <input
            className="border p-2 rounded-lg"
            hidden={login}
            type="text"
            name=""
            placeholder="Mobile Number or Email"
            id=""
          />
          <input
            className="border lg p-2 rounded-lg"
            hidden={login}
            type="text"
            name=""
            placeholder="Full Name"
            id=""
          />
          <input
            className="border p-2 rounded-lg"
            type="email"
            name=""
            id=""
            placeholder="Phone number, username, or email"
          />
          <input
            className="border p-2 rounded-lg"
            type="text"
            name=""
            id=""
            placeholder="Password"
          />
          <button className="text-white bg-gradient-to-r from-green-400 to-green-600 font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            {login ? "Sign in" : "Sign up"}
          </button>
          <div id="footer">
            {login ? "Don't have account?" : "have an account?"}{" "}
            <span
              className="cursor-pointer text-green-700"
              onClick={loginSwitch}
            >
              {login ? "Sign up" : "Log in"}
            </span>
          </div>
        </form>
      </div>
    </>
  );
}
