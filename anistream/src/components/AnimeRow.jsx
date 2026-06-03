import AnimeCard from "./AnimeCard"

export default function AnimeRow({
  title,
  animeList,
}) {

  return (

    <div className="px-10 py-10">

      <h1 className="text-4xl font-bold mb-8">
        {title}
      </h1>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide">

        {animeList.map((anime, index) => (

          <div
            key={index}
            className="min-w-[250px]"
          >

            <AnimeCard anime={anime} />

          </div>

        ))}

      </div>

    </div>

  )
}