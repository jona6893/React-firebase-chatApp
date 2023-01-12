import React from 'react'
import Chats from './sidebar/Chats'
import Navbar from './sidebar/Navbar'
import Search from './sidebar/Search'

function Sidebar() {
  return (
    <div className='sidebar'>
        <Navbar/>
        <Search/>
        <Chats/>
    </div>
  )
}

export default Sidebar