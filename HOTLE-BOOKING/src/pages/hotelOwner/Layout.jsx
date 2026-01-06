import React from 'react'
import Navbar from '../../components/hotelOwner/Navbar'
import Sidebar from '../../components/hotelOwner/Sidebar'

const Layout = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar/>
      <div className='flex h-full'>
        <Sidebar/>
        <div className=''>

        </div>
      </div>

    </div>
  )
}

export default Layout