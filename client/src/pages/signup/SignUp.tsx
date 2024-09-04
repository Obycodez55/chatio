import React from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import GenderCheckBox from "./GenderCheckBox";

type Props = {};

const SignUp = (props: Props) => {
  const [passwordOpen, setPasswordOpen] = React.useState(false);
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-500"> Chatio</span>
        </h1>
        <form>
          <div className="flex sm:flex-row flex-col gap-2">
            <div>
              <label htmlFor="firstName" className="label p-2">
                <span className="text-base label-text">First Name</span>
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your First Name..."
                className="input input-bordered w-full h-10"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="label p-2">
                <span className="text-base label-text">Last Name</span>
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your Last Name..."
                className="input input-bordered w-full h-10"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email..."
              className="input input-bordered w-full h-10"
            />
          </div>

          <div>
            <label htmlFor="password" className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <div className="flex">
              <input
                type={passwordOpen ? "text" : "password"}
                id="password"
                placeholder="Enter your password..."
                className="input input-bordered w-full h-10"
              />
              <div
                className="absolute right-8 h-10 flex items-center justify-center cursor-pointer"
                onClick={() => setPasswordOpen(!passwordOpen)}
              >
                {passwordOpen ? (
                  <IoMdEyeOff className="w-6 h-6" />
                ) : (
                  <IoMdEye className="w-6 h-6" />
                )}
              </div>
            </div>
          </div>
          <GenderCheckBox />
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Don&apos;t have an account? Register
          </a>

          <button type="submit" className="btn btn-block btn-sm mt-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
