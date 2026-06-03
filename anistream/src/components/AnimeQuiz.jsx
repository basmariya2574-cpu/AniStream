import { useState } from "react";
import { quizData } from "../data/quizData";
import bgImage from "../assets/quiz-bg.jpg";

export default function AnimeQuiz() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    if (quizData[current]?.answer === option) {
      setScore((prev) => prev + 1);
    }

    if (current + 1 < quizData.length) {
      setCurrent((prev) => prev + 1);
    } else {
      setStarted(false);
    }
  };

  return (
    <div
      className="min-h-screen text-white flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="bg-black/70 w-full min-h-screen flex flex-col items-center justify-center px-4">

        {/* START SCREEN */}
        {!started ? (
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              🧠 Anime Quiz
            </h1>

            <button
              onClick={() => setStarted(true)}
              className="bg-red-600 px-6 py-3 rounded-xl"
            >
              Start Quiz
            </button>
          </div>
        ) : (
          // QUIZ SCREEN
          <div className="text-center">

            <h2 className="text-2xl mb-6">
              {quizData[current].question}
            </h2>

            <div className="grid gap-3">
              {quizData[current].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt)}
                  className="bg-zinc-800 px-4 py-2 rounded-xl"
                >
                  {opt}
                </button>
              ))}
            </div>

            <p className="mt-6 text-gray-300">
              Score: {score}
            </p>

          </div>
        )}
      </div>
    </div>
  );
}