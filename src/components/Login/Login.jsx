import React from "react";
import { Fb, Google } from "../../assets";

const Login = () => {
  return (
    <div className="w-full max-w-[475px] h-[599px] flex flex-col gap-8 justify-center items-center mt-5 mb-[125px] px-4">
      <div className="w-[321px] h-[99px] flex flex-col justify-center items-center gap-2">
        <h1 className="font-inter text-[32px] text-primary font-bold leading-[150%] text-center">
          Log in or Sign up
        </h1>
        <p className="w-full text-center font-inter leading-[150%] font-light text-[14px] text-[#434343]">
          Join millions of others in sharing successful moves on HelpMeOut.
        </p>
      </div>
      <div className="w-full h-[120px] flex flex-col justify-between">
        <button className="w-full h-[48px] flex justify-center items-center gap-2 border rounded-xl border-primary">
          <img src={Google} alt="google" />
          <p className="text-primary font-inter font-medium">
            Continue with Google
          </p>
        </button>
        <button className="w-full h-[48px] flex justify-center items-center gap-2 border rounded-xl border-primary">
          <img src={Fb} alt="facebook" />
          <p className="text-primary font-inter font-medium">
            Continue with Facebook
          </p>
        </button>
      </div>
      <div className="w-full flex justify-center items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="201"
          height="1"
          viewBox="0 0 201 1"
          fill="none"
        >
          <path
            d="M0.5 0.5L200.5 0.500017"
            stroke="#B9C2C8"
            stroke-linecap="round"
          />
        </svg>
        <span className="font-inter text-sm font-medium text-[#B9C2C8]">
          or
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="201"
          height="1"
          viewBox="0 0 201 1"
          fill="none"
        >
          <path
            d="M0.5 0.5L200.5 0.500017"
            stroke="#B9C2C8"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <form className="w-full flex flex-col gap-8">
        <div className="w-full h-[174px] flex gap-4 flex-col">
          <div className="flex flex-col justify-between h-[78px]">
            <label
              htmlFor="email"
              className="text-[#626262] font-work_sans text-sm font-medium "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full h-[51px] text-primary font-work_sans text-sm font-medium p-4 border border-[#B6B3C6] rounded-xl"
              placeholder="Enter your email address"
            />
          </div>
          <div className="flex flex-col justify-between h-[78px]">
            <label
              htmlFor="password"
              className="text-[#626262] font-work_sans text-sm font-medium "
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full h-[51px] text-primary font-work_sans text-sm font-medium p-4 border border-[#B6B3C6] rounded-xl"
              placeholder="Enter your password"
            />
          </div>
        </div>
        <button className="w-full h-[53px] flex justify-center items-center bg-[#120B48] border rounded-lg text-white">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;
