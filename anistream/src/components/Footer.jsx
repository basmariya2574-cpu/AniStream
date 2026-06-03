import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa"

export default function Footer() {

  return (

    <footer className="bg-zinc-950 border-t border-zinc-800 mt-20 px-10 py-16 text-gray-400">

      <div className="grid md:grid-cols-4 gap-10">

        <div>

          <h1 className="text-4xl font-bold text-red-600 mb-4">
            AniStream
          </h1>

          <p className="leading-7">
            Premium Anime Streaming Dashboard inspired by Netflix and Crunchyroll.
          </p>

        </div>

        <div>

          <h2 className="text-white text-xl font-semibold mb-4">
            Navigation
          </h2>

          <div className="flex flex-col gap-3">

            <p className="hover:text-white cursor-pointer">Home</p>
            <p className="hover:text-white cursor-pointer">Trending</p>
            <p className="hover:text-white cursor-pointer">Movies</p>
            <p className="hover:text-white cursor-pointer">My List</p>

          </div>

        </div>

        <div>

          <h2 className="text-white text-xl font-semibold mb-4">
            Developers
          </h2>

          <div className="flex flex-col gap-3">

            <p>Frontend Developer</p>
            <p>React + Tailwind CSS</p>
            <p>Modern UI/UX Design</p>
            <p>Responsive Dashboard</p>

          </div>

        </div>

        <div>

          <h2 className="text-white text-xl font-semibold mb-4">
            Contact
          </h2>

          <div className="flex flex-col gap-4">

            <div className="flex items-center gap-3">
              <FaEnvelope />
              <p>anistream@gmail.com</p>
            </div>

            <div className="flex gap-5 text-2xl">

              <FaInstagram className="hover:text-white cursor-pointer" />

              <FaGithub className="hover:text-white cursor-pointer" />

              <FaLinkedin className="hover:text-white cursor-pointer" />

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-zinc-800 mt-10 pt-6 text-center">

        <p>
          © 2026 AniStream. All Rights Reserved.
        </p>

      </div>

    </footer>
  )
}