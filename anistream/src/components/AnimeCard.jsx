import { useNavigate } from "react-router-dom";
import { FaPlay, FaHeart } from "react-icons/fa";

export default function AnimeCard({ anime }) {
  const navigate = useNavigate();

  const addToFavorites = (e) => {
  e.stopPropagation();

  const favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

  const exists = favorites.find(
    (item) => item.id === anime.id
  );

  if (!exists) {
    favorites.push(anime);

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );

    alert(`${anime.title} added to My List ❤️`);
  }
};

  const handleClick = () => {
    // video page open
    navigate(`/video/${anime.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="group relative rounded-3xl overflow-hidden cursor-pointer hover:scale-105 transition duration-300 min-w-[250px]"
    >
      {/* IMAGE */}
      <img
        src={anime.image}
        alt={anime.title}
        className="w-full h-[350px] object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/60 transition duration-300"></div>

      {/* HOVER CONTENT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
       
       <button
  onClick={addToFavorites}
  className="absolute top-4 right-4 bg-red-600 p-3 rounded-full"
>
  <FaHeart />
</button>


        <button className="bg-red-600 p-5 rounded-full text-2xl hover:scale-110 transition mb-5">
          <FaPlay />
        </button>

        <h2 className="text-3xl font-bold text-center px-4">
          {anime.title}
        </h2>

        <p className="text-gray-300 mt-2">
          {anime.genre}
        </p>

      </div>
    </div>
  );
}