import { useState } from "react"

import solo from "../assets/solo.jpg"
import naruto from "../assets/naruto.jpg"
import demon from "../assets/demon.jpg"
import onepiece from "../assets/onepiece.jpg"

import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa"

export default function HeroBanner() {

  const banners = [

    {
      title: "Solo Leveling",
      desc: "The weakest hunter becomes the strongest hunter.",
      image: solo,
    },

    {
      title: "Naruto",
      desc: "A young ninja dreams of becoming Hokage.",
      image: naruto,
    },

    {
      title: "Demon Slayer",
      desc: "Tanjiro fights demons to save his sister.",
      image: demon,
    },

    {
      title: "One Piece",
      desc: "Luffy begins his pirate journey.",
      image: onepiece,
    },

  ]

  const [current, setCurrent] =
    useState(0)

  const nextSlide = () => {
    setCurrent(
      (current + 1) % banners.length
    )
  }

  const prevSlide = () => {
    setCurrent(
      (current - 1 + banners.length) %
        banners.length
    )
  }

  return (

    <div
      id="home"
      className="relative h-screen overflow-hidden"
    >

      <img
        src={banners[current].image}
        alt={banners[current].title}
        className="absolute w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>

      <div className="relative z-10 h-full flex items-center px-12">

        <div className="max-w-2xl">

          <p className="text-red-500 text-2xl mb-4 font-semibold">
            Trending Now
          </p>

          <h1 className="text-7xl font-extrabold mb-6">
            {banners[current].title}
          </h1>

          <p className="text-gray-300 text-xl leading-9 mb-8">
            {banners[current].desc}
          </p>

          <div className="flex gap-5">

            <button className="bg-red-600 hover:bg-red-500 px-8 py-4 rounded-2xl text-xl font-bold">

              Watch Now

            </button>

            <button className="bg-zinc-800 hover:bg-zinc-700 px-8 py-4 rounded-2xl text-xl font-bold">

              My List

            </button>

          </div>

        </div>

      </div>

      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black p-4 rounded-full text-white text-2xl z-20"
      >

        <FaChevronLeft />

      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black p-4 rounded-full text-white text-2xl z-20"
      >

        <FaChevronRight />

      </button>

    </div>

  )
}