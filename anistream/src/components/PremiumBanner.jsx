export default function PremiumBanner() {

  return (

    <div className="px-10 py-20">

      <div className="bg-gradient-to-r from-red-600 to-red-900 rounded-3xl p-12 flex flex-col lg:flex-row items-center justify-between gap-10">

        <div>

          <h1 className="text-5xl font-extrabold mb-6">

            Try Premium

          </h1>

          <p className="text-xl text-gray-200 mb-8 max-w-2xl">

            Watch anime in 4K quality without ads.
            Download episodes offline and get
            early access to new releases.

          </p>

          <button className="bg-white text-black px-8 py-4 rounded-2xl text-xl font-bold hover:scale-105 transition">

            Upgrade Now

          </button>

        </div>

        <div className="text-8xl">

          👑

        </div>

      </div>

    </div>

  )
}