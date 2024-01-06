import React from 'react'
import profile_photo from "../../../assets/profile.png"
function ChatlistItem(props) {
    let data = props.data;
    let bg_color_class = "bg-gray-400";
    if (data.isonline == true)
        bg_color_class = "bg-green-400";

    return (
        <div class="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
            <div class="flex-2">
                <div class="w-12 h-12 relative">
                    <img class="w-12 h-12 rounded-full mx-auto" src={profile_photo} alt="chat-user" />

                    <span className={`absolute w-4 h-4 ${bg_color_class} rounded-full right-0 bottom-0 border-2 border-white`}></span>
                </div>
            </div>
            <div class="flex-1 px-2">
                <div class="truncate w-32"><span class="text-gray-800">{data.name}</span></div>
                <div><small class="text-gray-600">{data.last_msg}</small></div>
            </div>
            <div class="flex-2 text-right">
                <div><small class="text-gray-500">{data.last_msg_date}</small></div>
                <div>
                    <small class="text-xs bg-red-500 text-white rounded-full h-6 w-6 leading-6 text-center inline-block">
                        {data.unseen_msg_cnt}
                    </small>
                </div>
            </div>
        </div>
    )
}

export default ChatlistItem