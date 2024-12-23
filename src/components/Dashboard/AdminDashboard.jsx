import React from 'react'
import Header from '../../others/Header'
import CreateTask from '../../others/CreateTask'
import AllTask from '../../others/AllTask'

const AdminDashboard = ({data}) => {
  return (
    <div className='w-full p-10 bg-[#1c1c1c]' >
        <Header data={data} />
        <CreateTask />
        <AllTask />
    </div>
  )
}

export default AdminDashboard
