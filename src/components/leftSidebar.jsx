import React from 'react'

const leftSidebar = () => {
  return (
    <div className='w-1/3 mt-5'>
      <button className=' w-44 h-12 bg-blue-500 text-white'>Get Weather</button>
     <div className='mt-5 flex justify-center'>
      <ul className='w-44 text-center'>
        <li className=' h-12 text-lg font-semibold outline-1 border border-black bg-blue-500 text-white'>City</li>
        <li className=' h-12  outline-1 border border-black'>Delhi</li>
        <li className=' h-12 outline-1 border border-black'>Mumbai</li>
        <li className=' h-12 outline-1 border border-black'>Chennai</li>
        <li className=' h-12 outline-1 border border-black'>Kolkata</li>
        <li className=' h-12 outline-1 border border-black'>Banglore</li>
      </ul>
     </div>
    </div>
  )
}

export default leftSidebar
