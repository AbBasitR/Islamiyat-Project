// import React from 'react'
'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  // Disclosure,
  // DisclosureButton,

  Popover,
  PopoverButton,
  PopoverGroup,
//   PopoverPanel,
} from '@headlessui/react'
import {

  Bars3Icon,
 
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Link } from "react-router";

// import {   } from '@heroicons/react/20/solid'
// import { useState } from 'react'
import {
  // Dialog,
  // DialogPanel,
  // Disclosure,
  // DisclosureButton,
  // DisclosurePanel,
  // Popover,
  // PopoverButton,
  // PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'

import { FaStar } from "react-icons/fa";
import {

  // Bars3Icon,
  // ChartPieIcon,
  // CursorArrowRaysIcon,
  // FingerPrintIcon,
  // SquaresPlusIcon,
  // XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon,  } from '@heroicons/react/20/solid'


const products = [
  { name: 'Salat (Prayer)',  href: '/namaz',  },
  { name: 'Sawm (Fasting)',  href: '/roza',  },
  { name: 'Zakat (Charity)',  href: '/zakat',  },
  { name: 'Hajj (Pilgrimage)',  href: '/hajj',  },
  // { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]


const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to='/' className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="../../public/logo.jpg"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
            <Link
            to='/'
            >

              Home
            </Link>
             
            </PopoverButton>

      
          </Popover>

      

          
          {/* <Link to='/earlylife'  className="text-sm/6 font-semibold text-gray-900">
          
            Early Life
            
          </Link> */}

<Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              <Link to='/earlylife'>Prophet Muhammad & Core Practices</Link> 
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <FaStar/>
                    </div>
                    <div className="flex-auto">
                      <Link to={`${item.href}`}  className="block font-semibold text-gray-900">
                      {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      {/* <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a> */}
                      
                    </div>
                  </div>
                ))}
              </div>
            
            </PopoverPanel>
          </Popover>

          {/* <Link   to='/videolectures' className="text-sm/6 font-semibold text-gray-900">
            Video Lectures
          </Link> */}
          <Link  to='/team' className="text-sm/6 font-semibold text-gray-900">
           Team
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="../../public/logo.jpg"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Product
                   
                  </DisclosureButton>
               
                </Disclosure> */}
                <Link
                to='/'
                  // href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
              
<Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              <Link to='/earlylife'>Prophet Muhammad & Core Practices</Link> 
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <FaStar/>
                    </div>
                    <div className="flex-auto">
                      <Link to={`${item.href}`}  className="block font-semibold text-gray-900">
                      {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      {/* <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a> */}
                      
                    </div>
                  </div>
                ))}
              </div>
            
            </PopoverPanel>
          </Popover>
                <Link
                to='/videoleactures'
                  // href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
Video Lectures                </Link>
                <Link
                to='/team'
                  // href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Team
                </Link>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

export default Navbar