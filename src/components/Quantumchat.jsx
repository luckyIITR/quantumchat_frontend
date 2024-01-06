import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

function Quantumchat() {
  return (
    <div class="w-full h-screen">
      <div class="flex h-full">
        <LeftSide/>
        <RightSide/>
      </div>
    </div>
  )
}

export default Quantumchat