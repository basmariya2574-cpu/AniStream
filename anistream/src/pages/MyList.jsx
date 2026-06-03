import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MyList() {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  const loadFavorites = () => {
    const saved =
      JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  const removeFromFavorites = (id) => {
    const updated = favorites.filter(
      (anime) => anime.id !== id
    );

    setFavorites(updated);
    localStorage.setItem(
      "favorites",
      JSON.stringify(updated)
    );
  };

  const openVideo = (id) => {
    navigate(`/video/${id}`);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">

      <h1 className="text-4xl font-bold mb-6">
        ❤️ My List
      </h1>

      {favorites.length === 0 ? (
        <div className="text-center text-gray-400 mt-20">
          <h2 className="text-2xl">
            No Anime in Your List 😢
          </h2>
          <p>Add some anime to see them here!</p>
        </div>
      ) : (

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {favorites.map((anime) => (
            <div
              key={anime.id}
              className="bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 transition relative cursor-pointer"
            >

              {/* IMAGE CLICK → VIDEO PAGE */}
              <img
                src={anime.image}
                alt={anime.title}
                className="w-full h-48 object-cover"
                onClick={() => openVideo(anime.id)}
              />

              {/* TITLE CLICK */}
              <h2
                className="p-2 font-semibold"
                onClick={() => openVideo(anime.id)}
              >
                {anime.title}
              </h2>

              {/* REMOVE BUTTON */}
              <button
                onClick={() =>
                  removeFromFavorites(anime.id)
                }
                className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-lg text-sm"
              >
                ✖
              </button>

            </div>
          ))}

        </div>
      )}
    </div>
  );
}