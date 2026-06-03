import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-zinc-900 p-8 rounded-xl w-96">
        <h2 className="text-2xl text-white text-center mb-6">
          Forgot Password
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 rounded bg-zinc-800 text-white mb-4"
        />

        <Link to="/login">
  <button className="w-full bg-purple-600 text-white py-3 rounded">
    Reset Password
  </button>
</Link>

        <Link
          to="/login"
          className="block text-center text-purple-400 mt-4"
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
}

export default ForgotPassword;