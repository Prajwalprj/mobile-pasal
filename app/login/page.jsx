"use client";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="relative w-full min-h-screen flex justify-center items-center">
   
      <img
        src="/wall.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover bg-black bg-opacity-50 z-0"
      />

      {/* ✅ Overlay (optional blur or dark effect) */}
      <div className="absolute inset-0 backdrop-blur-z-10" />

      
      <div className="relative z-20 w-full max-w-md bg-red-500 shadow-2xl border border-gray-300 rounded-xl p-10">
        <h1 className="text-2xl text-white font-bold text-center mb-6">
          Login Form
        </h1>

        <div className="space-y-4 font-white">
          <div>
            <label className="block font-semibold text-white">Email</label>
            <input
              type="text"
              placeholder="example@example.com"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold text-white">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <p className="text-right text-white text-sm cursor-pointer">
            Forgot Password?
          </p>

          <button className="w-full bg-white text-black p-2 rounded hover:bg-gray-200">
            Log in
          </button>

          <p className="text-center text-white font-bold">or continue with</p>

          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full mb-4 bg-white p-2 rounded flex items-center justify-center gap-2"
          >
            <img
              src="https://img.icons8.com/color/16/google-logo.png"
              alt="Google"
            />
            Continue with Google
          </button>

          <button
            onClick={() => signIn("facebook", { callbackUrl: "/" })}
            className="w-full p-2 bg-white rounded flex items-center justify-center gap-2 text-blue-600 hover:bg-gray-200"
          >
            <img
              src="https://img.icons8.com/fluency/16/facebook-new.png"
              alt="Facebook"
            />
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
