import { FaBell, FaFilm, FaFire, FaStar } from "react-icons/fa";

function Notifications() {
  const notifications = [
    {
      icon: <FaFilm />,
      title: "New Episode Released",
      desc: "Solo Leveling Episode 12 is now available",
      time: "2 hours ago",
      type: "episode",
    },
    {
      icon: <FaFire />,
      title: "Trending Update",
      desc: "Attack on Titan is trending in India 🔥",
      time: "5 hours ago",
      type: "trending",
    },
    {
      icon: <FaStar />,
      title: "Watchlist Update",
      desc: "Naruto added to Top Picks",
      time: "1 day ago",
      type: "watchlist",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">

      {/* HEADER */}
      <div className="flex items-center gap-3 mb-10">
        <FaBell className="text-red-500 text-2xl" />
        <h1 className="text-3xl font-bold">Notifications</h1>
      </div>

      {/* LIST */}
      <div className="space-y-4 max-w-3xl">

        {notifications.map((n, i) => (
          <div
            key={i}
            className="flex items-start gap-4 bg-zinc-900 border border-zinc-800 p-5 rounded-2xl
                       hover:bg-zinc-800 transition transform hover:scale-[1.02]"
          >

            {/* ICON */}
            <div className="text-red-500 text-xl mt-1">
              {n.icon}
            </div>

            {/* TEXT */}
            <div className="flex-1">

              <h2 className="text-lg font-semibold">
                {n.title}
              </h2>

              <p className="text-gray-400 text-sm mt-1">
                {n.desc}
              </p>

            </div>

            {/* TIME */}
            <span className="text-xs text-gray-500">
              {n.time}
            </span>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Notifications;