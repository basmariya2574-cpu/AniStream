import AnimeCard from "./AnimeCard"
import animeData from "../data/animeData"

export default function ContinueWatching() {

  return (

    <div className="px-10 py-14 bg-black">

      <div className="flex items-center justify-between mb-8">

        <h1 className="text-4xl font-bold">
          Continue Watching
        </h1>

        <p className="text-red-500 cursor-pointer">
          View All
        </p>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {animeData.map((anime, index) => (
          <AnimeCard anime={anime} key={index} />
        ))}

      </div>

    </div>
  )
}