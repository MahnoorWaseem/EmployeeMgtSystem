import React from 'react'

const CreateTask = () => {
  return (
    <div className='p-5 border-[0.1px] mt-7 rounded-xl'>
    <form className='flex flex-wrap w-full items-start justify-between' >
        {/* left */}
        <div className='w-1/2'>
        <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
              <input className='text-sm p-1 w-4/5 rounded-sm outline-none bg-transparent border-[1px] border-gray-400 mb-4  ' type="" placeholder='Make a UI design...'/>
        </div>

        <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
              <input className='text-sm p-1 w-4/5 rounded-sm outline-none bg-transparent border-[1px] border-gray-400 mb-4  ' type="date" placeholder=''/>
        </div>

        <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
              <input className='text-sm p-1 w-4/5 rounded-sm outline-none bg-transparent border-[1px] border-gray-400 mb-4  ' type="text" placeholder='Employee Name'/>
        </div>

        <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
              <input className='text-sm p-1 w-4/5 rounded-sm outline-none bg-transparent border-[1px] border-gray-400 mb-4  ' type="text" placeholder='design, dev, etc'/>
        </div>

        </div>

        {/* right */}

        <div className=' w-2/5 flex flex-col items-start  '>
        <h3 className='text-sm text-gray-300 mb-0.5'> Description</h3>
        <textarea className='w-full h-44 text-sm text-white py-2 px-2 rounded-sm outline-none bg-transparent border-[1px] border-gray-400 '></textarea>
        <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded-xl text-sm mt-4 text-white w-full '>Submit </button>

        </div>

    </form>
</div>
  )
}

export default CreateTask
