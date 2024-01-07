import React from 'react'
import Charbar from './Charbar'
import Messages from './Messages'
import Messagebar from './Messagebar'

function Chatarea() {
  return (
    <div class="chat-area flex-1 flex flex-col">
      <Charbar/>
      <Messages/>
      <Messagebar/>
    </div>
  )
}

export default Chatarea