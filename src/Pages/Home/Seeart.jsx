// import React from 'react'
// import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
const features = [
    {
      name: "Importance of Seerat",
      description: [
        "Moral & Ethical Guidance: Shows honesty, humility, patience, and kindness.",
        "Practical Life Lessons: Teaches perseverance, leadership, and compassion.",
        "Foundation of Islamic Law: Many Islamic rulings are derived from his sayings and actions (Sunnah).",
      ],
    },
    {
      name: "Why Studying Seerat is Essential",
      description: [
        "Acts as a Moral Compass: Sets benchmarks for truthfulness, justice, and social responsibility.",
        "Encourages Righteousness & Compassion: Promotes justice, fairness, and mercy for all.",
        "Connects Faith to Daily Life: Demonstrates how Islam integrates into personal and social life.",
      ],
    },
   
  ];
const Seeart = () => {
  return (
    <>
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600"> Definition</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              سیرت
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
              Seerat refers to the life and biography of Prophet Muhammad (PBUH), highlighting his teachings, character, and actions. It serves as a guiding light for Muslims, providing valuable lessons on morality, leadership, and faith
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
              {features.map((feature) => (
  <div key={feature.name} className="relative pl-9">
    <dt className="inline font-semibold text-gray-900">
      {feature.name}
    </dt>
    <ul className="list-disc pl-5 text-gray-700">
      {feature.description.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="../../../public/Seerat.jpg"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default Seeart