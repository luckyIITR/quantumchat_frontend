import React from 'react'
import Topbar from './Topbar'
import Chatarea from './Chatarea'
import Sidebar from './Sidebar'


function RightSide() {
  return (
    <div class="flex-1 bg-gray-100 w-full h-full">
      <div class="main-body container m-auto w-11/12 h-full flex flex-col">
        <Topbar />
        {/* bottom */}
        <div class="main flex-1 flex flex-col">
          {/* <div class="hidden lg:block heading flex-2">
            <h1 class="text-3xl text-gray-700 mb-4">Chat</h1>
          </div> */}
          <div class="flex-1 flex h-full">
            <Sidebar />
            <Chatarea />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSide