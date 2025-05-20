"use client" 
import Link from 'next/link'
import { useState } from 'react'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-[90%] m-auto rounded-4xl border border-black border-solid bg-gray-300 text-white p-4 sm:p-4 md:flex md:justify-between md:items-center">
      <div className="container mx-auto flex justify-between items-center">
        <a href="" className="text-2xl font-bold uppercase">cma</a>
        <div className={`${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row`}>
          <Link href="/" className="mx-2 hover:text-gray-700">
            Home
          </Link>
          <Link href="/about" className="mx-2 hover:text-gray-700">
            About
          </Link>
          <Link href="/contact" className="mx-2 hover:text-gray-700">
            Contact
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button className="text-gray-700 focus:outline-none" 
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav