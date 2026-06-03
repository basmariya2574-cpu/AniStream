import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import ContinueWatching from "../components/ContinueWatching";
import Trending from "../components/Trending";
import TopMovies from "../components/TopMovies";
import Genres from "../components/Genres";
import Footer from "../components/Footer";
import AnimeRow from "../components/AnimeRow";
import PremiumBanner from "../components/PremiumBanner";

import animeData from "../data/animeData";

function Home() {

  const navigate = useNavigate();

  const [selectedGenre, setSelectedGenre] =
    useState("All");

  const [search, setSearch] =
    useState("");

  const filteredAnime =
    animeData.filter((anime) => {

      const matchesGenre =
        selectedGenre === "All" ||
        anime.genre === selectedGenre;

      const matchesSearch =
        anime.title
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesGenre && matchesSearch;

    });

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">

      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <HeroBanner />

      <Genres
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />

      <Trending animeList={filteredAnime} />

      <AnimeRow
        title="Top Rated"
        animeList={filteredAnime}
      />

      <AnimeRow
        title="Action Anime"
        animeList={filteredAnime}
      />

      <AnimeRow
        title="New Releases"
        animeList={filteredAnime}
      />

      <PremiumBanner />

      {/* Watch Party */}
      <Link to="/watchparty">
        <div className="mx-6 my-8 bg-gradient-to-r from-purple-700 to-pink-600 p-6 rounded-2xl cursor-pointer hover:scale-[1.02] transition">

          <h2 className="text-3xl font-bold">
            🎉 Watch Party
          </h2>

          <p className="mt-2 text-gray-100">
            Watch anime together with your friends in real-time.
          </p>

          <button className="mt-4 bg-white text-black px-6 py-3 rounded-lg font-semibold">
            Start Watch Party
          </button>

        </div>
      </Link>

      {/* Release Calendar */}
      <Link to="/release-calendar">
        <div className="mx-6 my-8 bg-zinc-900 p-6 rounded-2xl border border-zinc-800 cursor-pointer hover:border-purple-500 transition">

          <h2 className="text-3xl font-bold">
            📅 Release Calendar
          </h2>

          <p className="mt-2 text-gray-400">
            Check upcoming anime episode release dates.
          </p>

        </div>
      </Link>


      <Link to="/mylist">
  <div className="mx-6 my-8 bg-red-700 p-6 rounded-2xl">
    <h2 className="text-3xl font-bold">
      ❤️ My List
    </h2>

    <p className="mt-2">
      View your favorite anime collection.
    </p>
  </div>
</Link>



      <Link to="/achievements">
  <div className="mx-6 my-8 bg-gradient-to-r from-yellow-600 to-orange-500 p-6 rounded-2xl cursor-pointer">

    <h2 className="text-3xl font-bold">
      🏆 Achievements
    </h2>

    <p className="mt-2">
      Unlock badges and rewards by watching anime.
    </p>

  </div>
</Link>

      <ContinueWatching />

      <TopMovies />


    <div className="mx-6 my-8 bg-red-600 p-6 rounded-2xl cursor-pointer hover:scale-[1.02] transition"
     onClick={() => navigate("/quiz")}>

  <h2 className="text-3xl font-bold">
    🧠 Anime Quiz
  </h2>

  <p className="mt-2 text-white/80">
    Test your anime knowledge and earn your score!
  </p>

  <button className="mt-4 bg-black text-white px-6 py-3 rounded-lg font-semibold">
    Start Quiz
  </button>

</div>
      <Footer />

    </div>
  );
}

export default Home;