import React from 'react'

const Header = ({data}) => {
  console.log(data)
  return (
    <div className='flex justify-between'>
      <h1 className='text-2xl font-medium '>Hi <br /> <span className='text-3xl font-semibold'>{data.firstName}</span></h1>
      <button className='bg-red-700 hover:bg-red-800 text-white font-bold px-5 py-3 rounded-xl text-lg'>Log Out</button>
    </div>
  )
}

export default Header
 