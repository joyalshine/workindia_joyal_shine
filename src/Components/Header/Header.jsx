import React from 'react'

function Header() {
  return (
    <div className='bg-[#E6E9F6] p-6'>
      <div className='flex justify-between'>
        <h4 className='font-bold'>Explore</h4>
        <h5 className='text-[#5DB075]'>Filter</h5>
      </div>
      <div className='pt-4 flex justify-center items-center'>
        <input type="text" placeholder='Search' className='w-[80%] mt-1 block w-full px-3 py-2 border border-gray-300 rounded-3xl text-[#BDBDBD] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'/>
      </div>
    </div>
  )
}

export default Header
