export default function Achievements() {
  const achievements = [
    {
      title: "First Episode Watched",
      badge: "🎬",
    },
    {
      title: "100 Episodes Watched",
      badge: "🍿",
    },
    {
      title: "Completed 10 Series",
      badge: "📺",
    },
    {
      title: "Anime Explorer",
      badge: "🌟",
    },
    {
      title: "Binge Master",
      badge: "🔥",
    },
    {
      title: "Otaku Legend",
      badge: "👑",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">

      <h1 className="text-4xl font-bold text-yellow-500 mb-6">
        🏆 Achievements
      </h1>

      <div className="grid md:grid-cols-2 gap-4">

        {achievements.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800"
          >
            <div className="text-5xl">
              {item.badge}
            </div>

            <h2 className="text-xl font-bold mt-3">
              {item.title}
            </h2>
          </div>
        ))}

      </div>

    </div>
  );
}