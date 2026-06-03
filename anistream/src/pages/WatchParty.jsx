export default function WatchParty() {
  return (
    <div className="min-h-screen bg-black text-white p-6">

      <h1 className="text-4xl font-bold mb-6 text-purple-500">
        Watch Party
      </h1>

      <div className="bg-zinc-900 rounded-2xl p-6">

        <h2 className="text-2xl font-semibold">
          Solo Leveling - Episode 1
        </h2>

        <p className="text-gray-400 mt-2">
          Watch together with your friends.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="bg-purple-600 px-6 py-3 rounded-lg">
            Create Party
          </button>

          <button className="bg-zinc-700 px-6 py-3 rounded-lg">
            Join Party
          </button>
        </div>

      </div>

    </div>
  );
}