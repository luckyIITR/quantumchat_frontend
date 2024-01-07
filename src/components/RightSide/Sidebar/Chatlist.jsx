import React from 'react'
import ChatlistItem from './ChatlistItem'

function Chatlist() {
    let sample_data_1 = {
        profile_pic: "",
        isonline: true,
        name: "Lucky Kushwaha",
        last_msg: "Yeah, Sure!",
        unseen_msg_cnt: "4",
        last_msg_date: "06/01/2024",
        isopened: true
    }

    let sample_data_2 = {
        profile_pic: "",
        isonline: false,
        name: "Aman Gupta",
        last_msg: "Great!",
        unseen_msg_cnt: "12",
        last_msg_date: "06/01/2024",
        isopened: false
    }
    return (
        
        <div class="flex-1 max-h-[80vh] overflow-auto px-2">
            <ChatlistItem data = {sample_data_1}/>
            <ChatlistItem data = {sample_data_2}/>
            <ChatlistItem data = {sample_data_2}/>
            <ChatlistItem data = {sample_data_2}/>
            <ChatlistItem data = {sample_data_2}/>
            <ChatlistItem data = {sample_data_2}/>
            <ChatlistItem data = {sample_data_2}/>
            <ChatlistItem data = {sample_data_2}/>
        </div>
    )
}

export default Chatlist