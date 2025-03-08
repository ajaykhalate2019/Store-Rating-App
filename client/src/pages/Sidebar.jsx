import React from 'react';
import {Link} from 'react-router-dom'
import {FaChartPie, FaSignOutAlt, FaUserPlus, FaUsers} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className='bg-gray-800 text-white w-64 h-screen fixed left-0 top-0 p-5'>
      <h2 className='text-xl font-bold mb-5'>Admin Dashboard</h2>
      <ul className='space-y-3'>

      <li className='p-2 hover:bg-gray-700 rounded'>
      <FaChartPie className='mr-2'/> Dashboard
      </li>
      <li className='p-2 hover:bg-gray-700 rounded'> Add User
      <FaUsers className='mr-2'/> 
      </li>
      <li className='p-2 hover:bg-gray-700 rounded'> Store Owner
      <FaUserPlus className='mr-2'/> 
      </li>
      <button className='flex items-center'><FaSignOutAlt className='mr-2'/> Logout</button>

      </ul>


    </div>
  )
}

export default Sidebar