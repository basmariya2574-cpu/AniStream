import {
  FaSearch,
  FaBell,
  FaUserCircle,
  FaHome,
  FaFire,
  FaFilm,
  FaTv,
} from "react-icons/fa"
import { useNavigate } from "react-router-dom";

import { useState } from "react"

export default function Navbar({
  search,
  setSearch,
}) {

  const navigate = useNavigate();
  const [showNotifications] =
    useState(false)

  return (

    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-800 px-10 py-5 flex items-center justify-between">

      {/* LEFT */}

      <div className="flex items-center gap-10">

        <h1 className="text-4xl font-extrabold text-red-600 tracking-wide">

          AniStream

        </h1>

        <div className="hidden md:flex items-center gap-8 text-lg">

          <button
            onClick={() =>
              document
                .getElementById("home")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
            className="flex items-center gap-2 hover:text-red-500 transition"
          >

            <FaHome />
            Home

          </button>

          <button
            onClick={() =>
              document
                .getElementById("trending")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
            className="flex items-center gap-2 hover:text-red-500 transition"
          >

            <FaFire />
            Trending

          </button>

          <button
            onClick={() =>
              document
                .getElementById("movies")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
            className="flex items-center gap-2 hover:text-red-500 transition"
          >

            <FaFilm />
            Movies

          </button>

          <button
            onClick={() =>
              document
                .getElementById("genres")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
            className="flex items-center gap-2 hover:text-red-500 transition"
          >

            <FaTv />
            Genres

          </button>

        </div>

      </div>

      {/* RIGHT */}

      <div className="flex items-center gap-6 relative">

        {/* SEARCH */}

        <div className="flex items-center bg-zinc-900/80 border border-zinc-700 px-5 py-3 rounded-2xl">

          <FaSearch className="text-gray-400 mr-3" />

          <input
            type="text"
            placeholder="Search anime..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="bg-transparent outline-none text-white w-44"
          />

        </div>

        {/* NOTIFICATION */}

        <div className="relative">

          <button
            onClick={() =>
              navigate("/notifications")
            }
            className="bg-zinc-900 p-4 rounded-full hover:bg-red-600 transition"
          >

            <FaBell className="text-xl" />

          </button>

          {showNotifications && (

            <div className="absolute right-0 mt-5 w-80 bg-zinc-900 border border-zinc-700 rounded-3xl p-6 shadow-2xl">

              <h2 className="text-2xl font-bold mb-5">

                Notifications

              </h2>

              <div className="flex flex-col gap-4 text-gray-300">

                <button className="text-left hover:text-white">

                  🔥 Solo Leveling new episode released

                </button>

                <button className="text-left hover:text-white">

                  🎬 New Anime Movie Added

                </button>

                <button className="text-left hover:text-white">

                  ⭐ Your Watchlist Updated

                </button>

              </div>

            </div>

          )}

        </div>

        {/* PROFILE */}

        <button
          onClick={() =>
            navigate("/profile")
          }
          className="bg-zinc-900 p-3 rounded-full hover:bg-red-600 transition"
        >

          <FaUserCircle className="text-3xl" />

        </button>

      </div>

    </nav>

  )
}