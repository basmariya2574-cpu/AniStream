export default function Genres({
  selectedGenre,
  setSelectedGenre,
}) {

  const genres = [
    "All",
    "Action",
    "Fantasy",
    "Romance",
    "Comedy",
    "Adventure",
    "Sports",
    "Dark Fantasy",
  ]

  return (

    <div
      id="genres"
      className="px-10 py-14 bg-black"
    >

      <h1 className="text-4xl font-bold mb-10">
        Genres
      </h1>

      <div className="flex flex-wrap gap-5">

        {genres.map((genre, index) => (

          <button
            key={index}
            onClick={() =>
              setSelectedGenre(genre)
            }
            className={`px-8 py-4 rounded-2xl text-lg transition ${
              selectedGenre === genre
                ? "bg-red-600"
                : "bg-zinc-900 hover:bg-red-600"
            }`}
          >

            {genre}

          </button>

        ))}

      </div>

    </div>
  )
}