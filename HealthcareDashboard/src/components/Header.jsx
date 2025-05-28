import React from 'react'
import bg from '../assets/react.svg'

function Header() {
  return (
      <header className="flex flex-wrap items-center justify-between p-4 shadow mask-v-from-20% bg-emerald-100 border-b gap-4">
      <div className="text-2xl font-extrabold text-blue-600">Healthcare.</div>
      <div className="flex items-center space-x-2 sm:space-x-4 flex-wrap justify-end">
        <input type="text" placeholder="Search..." className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 w-full sm:w-auto" />
        <div className="text-xl text-gray-600">🛎️</div>
        <div className="flex items-center space-x-2">
          <img src={bg} alt="User" className="w-8 h-8 rounded-full border" />
          <span className="font-medium text-gray-700 hidden sm:inline">Dr. Johnny Test</span>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">＋</button>
      </div>
    </header>
  )
}

export default Header