import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-red-400 text-blue-950 py-3'>
        <div>
            <span className=' text-xl font-bold mx-9 text-white'>iTask</span>
        </div>
        <ul className='flex gap-14 text-amber-50 mx-9'>
            <li className='cursor-pointer text-white text-xl font-medium hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer text-white text-xl font-medium hover:font-bold transition-all'>Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar