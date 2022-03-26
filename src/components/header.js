import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  
  MenuIcon,
  
  XIcon,
} from '@heroicons/react/outline'
// import { ChevronDownIcon } from '@heroicons/react/solid'
// import logo from '../images/logo.png'
// import logo2 from '../images/logo2.png'
import { Link } from 'gatsby'
import logo from '../images/logo2.png'
import logo2 from '../images/logo2.png'


export default function Header() {
  return (
    <Popover className="relative  z-40 border-b border-black">
      <div className=" xl:max-w-6xl 2xl:max-w-7xl lg:max-w-5xl md:max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center pt-9 pb-3 md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Workflow</span>
              {/* <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              /> */}
              <img className="logo xl:w-48 lg:w-40 sm:w-36 w-32" src={logo} alt="" />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-black hover:opacity-80">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex md:space-x-6 lg:space-x-10 items-center">
            

            <Link to="/" className="text-sm lg:text-base font-medium text-black hover:text-secondary underline-offset-2 decoration-2">
              HOME
            </Link>
            <Link to="/Products/" className="text-sm lg:text-base font-medium text-black hover:text-secondary underline-offset-2 decoration-2">
              PRODUCT
            </Link>
            <Link to="/AboutUs/" className="text-sm lg:text-base font-medium text-black hover:text-secondary underline-offset-2 decoration-2">
              ABOUT US
            </Link>
            <Link to="/CallUs/" className= "first-letter: text-sm lg:text-base font-bold text-white py-1 px-3 text-center bg-primary hover:font-bold rounded-xl  underline-offset-2 decoration-2">
              CALL US
            </Link>

            
          </Popover.Group>
          
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  {/* <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  /> */}
                  <img className="w-32" src={logo2} alt="" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-4 w-4" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-4">
                 
                  
                  
            <Link to="/#home" className="text-sm lg:text-base font-medium text-primary hover:text-secondary hover:font-bold underline-offset-2 decoration-2">
              HOME
            </Link>
            <Link to="/#Products" className="text-sm lg:text-base font-medium text-primary hover:text-secondary hover:font-bold underline-offset-2 decoration-2">
              PRODUCTS
            </Link>
            <Link to="/#Service" className="text-sm lg:text-base font-medium text-primary hover:text-secondary hover:font-bold underline-offset-2 decoration-2">
              ABOUT US
            </Link>
            <Link to="/#Contact Us" className="text-sm lg:text-base font-medium text-white bg-primary w-full rounded-full py-3 text-center  hover:font-bold underline-offset-2 decoration-2">
              CALL US
            </Link>
                </nav>
              </div>
            </div>
            
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
