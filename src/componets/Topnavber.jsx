



import React from 'react'
import { FaAngleDown, FaBell } from 'react-icons/fa';

const Topnavber = () => {
  return (
    <header className="bg-neutral-50 border-b border-slate-300 text-zinc-900 font-sans py-1">
      <div className="w-11/12 mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <span className="font-semibold text-lg tracking-wide"># Roster Grid</span>
        </div>

        {/* Menu */}
        <div className="hidden lg:flex gap-6 items-center border border-slate-200 px-5 py-1 bg-gray-300 rounded-full text-sm font-medium tracking-wide">
          <a href="/" className="hover:text-blue-600 flex items-center">
            Dash <FaAngleDown className="ml-1" />
          </a>
          <a href="/roster" className="hover:text-blue-600 flex items-center">
            Team <FaAngleDown className="ml-1" />
          </a>
          <span className="hover:text-blue-600 flex items-center">
            Chat
          </span>
          <div className="flex items-center rounded-full px-4 py-1 text-white bg-indigo-600 hover:bg-indigo-700 transition">
            CRM <FaAngleDown className="ml-1" />
          </div>
          <a href="/contracts" className="hover:text-blue-600 flex items-center">
            Deals <FaAngleDown className="ml-1" />
          </a>
          <a href="/settings" className="hover:text-blue-600 flex items-center">
            Options <FaAngleDown className="ml-1" />
          </a>
          <a href="/more" className="hover:text-blue-600 flex items-center">
            Extra <FaAngleDown className="ml-1" />
          </a>
        </div>

        {/* Right icons */}
        <div className="hidden lg:flex items-center gap-4">
          <FaBell className="text-xl cursor-pointer hover:text-blue-600" />
          <span className="text-sm font-medium">Yogesh</span>
          <div className="bg-rose-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
            Y
          </div>
        </div>

        {/* Hamburger */}
        <div className="lg:hidden">
          <button className="focus:outline-none">
            <svg className="w-7 h-7 fill-current text-black" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
            </svg>
          </button>
        </div>

      </div>
    </header>
  )
}

export default Topnavber
