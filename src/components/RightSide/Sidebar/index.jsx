import React from 'react'
import Searchbar from './Searchbar'
import Chatlist from './Chatlist'

function Sidebar() {
  return (
    <div class="sidebar hidden lg:flex w-1/3 flex-2 flex-col pr-6">
      <Searchbar/>
      <Chatlist/>
    </div>
  )
}   

export default Sidebar