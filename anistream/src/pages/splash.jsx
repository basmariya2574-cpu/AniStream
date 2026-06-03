import { Link } from "react-router-dom";

function Splash() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <Link to="/login">
        <h1 className="text-6xl font-bold text-purple-500 cursor-pointer">
          AniStream
        </h1>
      </Link>
    </div>
  );
}

export default Splash;