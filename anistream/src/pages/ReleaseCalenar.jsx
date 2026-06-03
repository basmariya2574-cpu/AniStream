export default function ReleaseCalendar() {
  const releases = [
    {
      anime: "Solo Leveling",
      episode: "Episode 12",
      date: "June 5, 2026",
    },
    {
      anime: "One Piece",
      episode: "Episode 1130",
      date: "June 6, 2026",
    },
    {
      anime: "Demon Slayer",
      episode: "Episode 8",
      date: "June 7, 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-purple-500 mb-6">
        Release Calendar
      </h1>

      <div className="space-y-4">
        {releases.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 p-5 rounded-xl"
          >
            <h2 className="text-xl font-bold">
              {item.anime}
            </h2>

            <p>{item.episode}</p>

            <p className="text-gray-400">
              Release Date: {item.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}