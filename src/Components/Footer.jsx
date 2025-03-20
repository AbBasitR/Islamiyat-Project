import { Link } from "react-router"

// import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-white rounded-lg shadow-sm  mt-20 ">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Link to='/' className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="../../public/logo.jpg" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black-500 sm:mb-0 dark:text-black-400">
                <li>
                    <Link to='/' className="hover:underline me-4 md:me-6">

Home</Link>
                </li>
                <li>
                    <Link to='/earlylife' className="hover:underline me-4 md:me-6">Prophet Muhammad & Core Practices</Link>
                </li>
                <li>
                    <Link to='/videoleactures' className="hover:underline me-4 md:me-6">Video Lectures</Link>
                </li>
                <li>
                    <Link to='/team' className="hover:underline">Team</Link>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <span className="block text-sm  sm:text-center text-black-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
    </div>
</footer>
    </>
  )
}

export default Footer