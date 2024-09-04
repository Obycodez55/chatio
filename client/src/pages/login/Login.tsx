import React from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";


const Login = () => {
  const [passwordOpen, setPasswordOpen] = React.useState(false);
  return (
    <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-500"> Chatio</span>
        </h1>
        <form>
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
              <div className="absolute right-8 h-10 flex items-center justify-center cursor-pointer"
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

export default Login;
