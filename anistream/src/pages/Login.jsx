import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("user", "loggedin");
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-zinc-900 p-8 rounded-xl w-96 shadow-lg">
        <h1 className="text-3xl font-bold text-purple-500 text-center mb-2">
          AniStream
        </h1>

        <p className="text-gray-400 text-center mb-6">
          Welcome Back
        </p>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-zinc-800 text-white"
        />

        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-3 rounded bg-zinc-800 text-white"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-gray-400"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        
        {/* FORGOT PASSWORD */}
        <div className="text-right mb-4">
          <Link
            to="/forgot-password"
            className="text-purple-400 text-sm hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded"
        >
          Login
        </button>

        <p className="text-center text-gray-400 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-purple-400">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;