import { useNavigate } from "react-router-dom";

function VideoPlayer() {
  const navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen text-white p-4">

      <button
        onClick={() => navigate(-1)}
        className="bg-gray-800 px-4 py-2 rounded mb-4"
      >
        ⬅ Back
      </button>

      <h1 className="text-3xl font-bold mb-4">
        Video Test
      </h1>

      <video
        controls
        autoPlay
        className="w-full rounded-xl"
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Your browser does not support video.
      </video>

    </div>
  );
}

export default VideoPlayer;