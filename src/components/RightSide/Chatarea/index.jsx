import React from 'react'
import Chatbar from './Chatbar'
import Messages from './Messages'
import Messagebar from './Messagebar'


function Chatarea({togglePanel}) {
  let charbar_data = {
    profile_pic:"data:image/jpeg;base64,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",
    name: "Lucky Kushwaha",
    active_time: "active 1h ago"
  }
  return (
    <div class=" chat-area flex-1 flex flex-col mt-4 pr-5 border-r-2 border-gray-800">
      <Chatbar data={charbar_data} togglePanel = {togglePanel}/>
      <Messages />
      <Messagebar />
    </div>
  )
}

export default Chatarea