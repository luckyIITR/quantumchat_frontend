import React from 'react'

function Messagebar() {
  return (
    <div class="flex-2 pt-4 pb-10">
      <div class="write bg-white shadow flex rounded-lg">
        <div class="flex-3 flex content-center items-center text-center p-4 pr-0">
          <span class="block text-center text-gray-400 hover:text-gray-800">
            <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" class="h-6 w-6"><path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </span>
        </div>
        <div class="flex-1">
          <textarea name="message" class="w-full block outline-none py-4 px-4 bg-transparent" rows="1" placeholder="Type a message..." autofocus=""></textarea>
        </div>
        <div class="flex-2 w-32 p-2 flex content-center items-center">
          <div class="flex-1 text-center">
            <span class="text-gray-400 hover:text-gray-800">
              <span class="inline-block align-text-bottom">
                <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
              </span>
            </span>
          </div>
          <div class="flex-1">
            <button class="bg-blue-400 w-10 h-10 rounded-full inline-block">
              <span class="inline-block align-text-bottom">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-4 h-4 text-white"><path d="M5 13l4 4L19 7"></path></svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messagebar