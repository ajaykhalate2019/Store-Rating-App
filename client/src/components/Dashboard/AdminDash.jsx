import React from 'react';
import Sidebar from '../../pages/Sidebar';



const AdminDash = () => {
  return (
    <div className='flex bg-gray-900 text-white'>
        <Sidebar/>
        <div className='flex-1 p-6 ml-64'>
        <h2 className='text-2xl font-bold mb-6'>Admin Dashboard</h2>
        <div className='grid grid-cols-3 gap-6 mb-6'>
        <div className='bg-gray-800 p-4 rounded-lg text-center'>
            <h3 className='text-lg font-bold'>Total Store Owner</h3>
            <p className='text-3xl font-bold'></p>
        </div>

        <div className='bg-gray-800 p-4 rounded-lg text-center'>
            <h3 className='text-lg font-bold'>Total User</h3>
            <p className='text-3xl font-bold'></p>
        </div>

        <div className='bg-gray-800 p-4 rounded-lg text-center'>
            <h3 className='text-lg font-bold'>Total review</h3>
            <p className='text-3xl font-bold'> </p>
        </div>

        </div>

        </div>
        
    </div>
  )
}

export default AdminDash;