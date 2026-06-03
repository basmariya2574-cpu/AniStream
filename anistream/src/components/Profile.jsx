import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const [editing, setEditing] = useState(false);

  const favoritesCount =
  JSON.parse(
    localStorage.getItem("favorites")
  )?.length || 0;

  const [profile, setProfile] = useState({
    name: "Anime User",
    id: "ANI2026",
    email: "animeuser@gmail.com",
    plan: "Premium",
    watching: "Naruto",
    favorites: "28 Anime",
  });

  useEffect(() => {
    const savedProfile = localStorage.getItem("animeProfile");

    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = () => {
    localStorage.setItem(
      "animeProfile",
      JSON.stringify(profile)
    );

    setEditing(false);

    alert("Profile Saved Successfully");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");

    alert("Logged Out Successfully");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">

      <div className="w-full max-w-2xl bg-zinc-900 rounded-3xl p-10 shadow-2xl border border-zinc-800">

        {/* Avatar + Title */}
        <div className="flex flex-col items-center mb-8">

          <div className="w-24 h-24 rounded-full bg-red-600 flex items-center justify-center text-3xl font-bold">
            {profile.name.charAt(0)}
          </div>

          <h1 className="text-3xl font-bold mt-4">
            {profile.name}
          </h1>

          <p className="text-gray-400">
            {profile.plan} Member
          </p>

        </div>

        {/* Profile Details */}
        <div className="space-y-4 text-lg">

          {/* Name */}
          <div className="bg-black/40 p-4 rounded-xl border border-zinc-800">
            <span className="text-gray-400 block mb-2">
              Name
            </span>

            {editing ? (
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full bg-zinc-800 p-2 rounded-lg"
              />
            ) : (
              <span>{profile.name}</span>
            )}
          </div>

          {/* ID */}
          <div className="flex justify-between bg-black/40 p-4 rounded-xl border border-zinc-800">
            <span className="text-gray-400">ID</span>
            <span>{profile.id}</span>
          </div>

          {/* Email */}
          <div className="bg-black/40 p-4 rounded-xl border border-zinc-800">
            <span className="text-gray-400 block mb-2">
              Email
            </span>

            {editing ? (
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full bg-zinc-800 p-2 rounded-lg"
              />
            ) : (
              <span>{profile.email}</span>
            )}
          </div>

          {/* Plan */}
          <div className="flex justify-between bg-black/40 p-4 rounded-xl border border-zinc-800">
            <span className="text-gray-400">Plan</span>

            <span className="text-red-500 font-semibold">
              {profile.plan}
            </span>
          </div>

          {/* Watching */}
          <div className="bg-black/40 p-4 rounded-xl border border-zinc-800">
            <span className="text-gray-400 block mb-2">
              Watching
            </span>

            {editing ? (
              <input
                type="text"
                name="watching"
                value={profile.watching}
                onChange={handleChange}
                className="w-full bg-zinc-800 p-2 rounded-lg"
              />
            ) : (
              <span>{profile.watching}</span>
            )}
          </div>

          {/* Favorites */}
          <div className="bg-black/40 p-4 rounded-xl border border-zinc-800">
            <span className="text-gray-400 block mb-2">
              Favorites
            </span>

            {editing ? (
              <input
                type="text"
                name="favorites"
                value={profile.favorites}
                onChange={handleChange}
                className="w-full bg-zinc-800 p-2 rounded-lg"
              />
            ) : (
              <span>{profile.favorites}</span>
            )}
          </div>

        </div>

        {/* Anime Stats */}

<div className="mt-8">

  <h2 className="text-2xl font-bold mb-4">
    Anime Statistics
  </h2>

  <div className="grid grid-cols-2 gap-4">

    <div className="bg-black/40 p-4 rounded-xl border border-zinc-800">
      <p className="text-gray-400">
        Episodes Watched
      </p>

      <h3 className="text-2xl font-bold">
        124
      </h3>
    </div>

    <div className="bg-black/40 p-4 rounded-xl border border-zinc-800">
      <p className="text-gray-400">
        Favorite Genre
      </p>

      <h3 className="text-2xl font-bold">
        Action
      </h3>
    </div>

    <div className="bg-black/40 p-4 rounded-xl border border-zinc-800">
      <p className="text-gray-400">
        Achievements
      </p>

      <h3 className="text-2xl font-bold">
        6
      </h3>
    </div>
    <div className="bg-black/40 p-4 rounded-xl border border-zinc-800">
  <p className="text-gray-400">
    My List
  </p>

  <h3 className="text-2xl font-bold">
    {favoritesCount}
  </h3>
</div>

    <div className="bg-black/40 p-4 rounded-xl border border-zinc-800">
      <p className="text-gray-400">
        Watch Parties
      </p>

      <h3 className="text-2xl font-bold">
        3
      </h3>
    </div>

  </div>

</div>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">

          {!editing ? (
            <button
              onClick={() => setEditing(true)}
              className="flex-1 bg-red-600 hover:bg-red-700 py-3 rounded-xl font-semibold"
            >
              Edit Profile
            </button>
          ) : (
            <button
              onClick={saveProfile}
              className="flex-1 bg-green-600 hover:bg-green-700 py-3 rounded-xl font-semibold"
            >
              Save Profile
            </button>
          )}

          <button
            onClick={handleLogout}
            className="flex-1 bg-zinc-800 hover:bg-zinc-700 py-3 rounded-xl"
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}