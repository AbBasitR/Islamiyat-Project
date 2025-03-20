import Hadding from "../../Components/Hadding"
import Layout from "../../Components/Layout"
import Data from "./Data"
import Difference from "./Difference"
import EarlyLife from "./EarlyLife"
// import Data from "./Hadding"

// import Features from "./Features"
// import Hadding from "./Hadding"

import IntroOf from "./IntroOf"
import Seeart from "./Seeart"

// import React from 'react'
// const images = [
//   { id: 1, number: "001", path: "../../../public/img1.jpg" },
//   { id: 2, number: "002", path: "../../../public/img2.jpg" },
//   { id: 3, number: "003", path: "../../../public/img3.jpg" },
//   { id: 4, number: "004", path: "../../../public/img4.jpg" },
//   { id: 5, number: "005", path: "../../../public/img5.jpg" },
//   { id: 6, number: "006", path: "../../../public/img6.jpg" },
//   { id: 7, number: "007", path: "../../../public/img7.jpg" },
//   { id: 8, number: "008", path: "../../../public/img8.jpg" },
//   { id: 9, number: "009", path: "../../../public/img9.jpg" },
//   { id: 10, number: "010", path: "../../../public/img10.jpg" },
//   { id: 11, number: "011", path: "../../../public/img11.jpg" },
// ];




const Home = () => {
  return (
    <Layout>

<div className="relative overflow-hidden bg-white">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Seerat
            </h1>
            <p className="mt-4 text-xl text-gray-500">
            Discover the noble Seerat of Prophet Muhammad (PBUH) – a beacon of mercy, wisdom, and guidance. Explore his life, teachings, and character here.
            </p>
          </div>
          <div>
            
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                       
                          alt="img1"
                          src="../../../public/img6.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                           
                          alt=""
                          src="../../../public/img13.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="../../../public/img7.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="../../../public/img8.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="../../../public/img9.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="../../../public/img5.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="../../../public/img4.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
              Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Hadding text="Fact And Figures" />
    <Data  />

    {/* <Features /> */}
    <Hadding text="Introduction to Seerat" />
    <Seeart />
    <Hadding text="Common Principals of Seerat and  Jurisprudence" />

    <IntroOf />
    <Hadding text="Difference Between Seerat and  Jurisprudence" />
    <Difference />
    <Hadding text='Early Life' />
    <EarlyLife />
    </Layout>
  )
}

export default Home