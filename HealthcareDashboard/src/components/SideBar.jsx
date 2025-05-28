import React from 'react'

function SideBar({ links }) {
  return (
      <aside className="w-20% md:w-64 bg-gradient-to-b from-blue-100 to-blue-900 p-9 shadow-inner">
      <h2 className=" text-lg mb-6 text-blue-400 font-extrabold ">General</h2>
      <nav className="space-y-9">
        {links.map((item) => (
          <div key={item} className="text-white hover:text-blue-700 hover:font-semibold cursor-pointer">
            {item}
          </div>
        ))}
      </nav>
    </aside>
  )
}

export default SideBar