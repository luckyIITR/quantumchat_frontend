import React from 'react'
import Userprofile from './Userprofile'
import Menu from './Menu'


function LeftSide() {
  return (
    <div class="hidden xl:block sm:flex-2 w-64 bg-gray-200">
      <Userprofile/>
      <Menu/>
    </div>
  )
}

export default LeftSide