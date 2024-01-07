import React from 'react'
import Chatbar from './Chatbar'
import Messages from './Messages'
import Messagebar from './Messagebar'

function Chatarea() {
  return (
    <div class="chat-area flex-1 flex flex-col">
      <Chatbar/>
      <Messages/>
      <Messagebar/>
    </div>
  )
}

export default Chatarea