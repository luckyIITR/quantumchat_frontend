import React from 'react'
import profile_pic from "../../../../assets/profile.png"

function Message(props) {
    let data = props.data;
    
    let status = "bg-gray-400"
    if(data.isonline)
        status = "bg-green-400"

    let me = data.isme;

    let inner_classes = "bg-gray-300 text-gray-700"
    let outer_classes = ""
    if (me) {
        inner_classes = "bg-blue-600 text-white";
        outer_classes = "text-right me";
    }

    return (
        <>
            <div class={`message mb-0 flex ${outer_classes}`}>
                {!me ? (<div class="flex-2">
                    <div class="w-12 h-12 relative">
                        <img class="w-12 h-12 rounded-full mx-auto" src={profile_pic} alt="chat-user" />
                        <span class={`absolute w-4 h-4 ${status} rounded-full right-0 bottom-0 border-2 border-white`}></span>
                    </div>
                </div>) : null}

                <div class="flex-1 px-2">
                    <div class={`inline-block  rounded-full p-2 px-6 ${inner_classes}`}>
                        <span>{data.msg}</span>
                    </div>
                    <div class="pl-4"><small class="text-gray-500">{data.timestamp}</small></div>
                </div>
            </div>
        </>
    )
}

export default Message