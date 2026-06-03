import AnimeCard from "./AnimeCard"

export default function Trending({
  animeList,
}) {

  return (

    <div
      id="trending"
      className="px-10 py-16 bg-black"
    >

      <div className="flex items-center justify-between mb-8">

        <h1 className="text-4xl font-bold">
          Trending Anime
        </h1>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

        {animeList.map((anime, index) => (

          <AnimeCard
            anime={anime}
            key={index}
          />

        ))}

      </div>

    </div>
  )
}