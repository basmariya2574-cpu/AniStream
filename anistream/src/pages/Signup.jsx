import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-zinc-900 p-8 rounded-xl w-96 shadow-lg">

        <h1 className="text-3xl font-bold text-purple-500 text-center mb-2">
          AniStream
        </h1>

        <p className="text-gray-400 text-center mb-6">
          Create Your Account
        </p>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-4 rounded bg-zinc-800 text-white"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-zinc-800 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded bg-zinc-800 text-white"
        />

        <Link to="/home">
  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded">
    Sign Up
  </button>
</Link>

        <p className="text-center text-gray-400 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-400">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;