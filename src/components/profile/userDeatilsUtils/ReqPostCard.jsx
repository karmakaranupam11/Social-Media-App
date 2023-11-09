import React from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

const ReqPostCard = () => {

  return (

    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-gray-100 p-1 rounded-lg">
        <img className="h-60 rounded w-full object-cover object-center mb-1" src="https://cdn.pixabay.com/photo/2023/09/30/12/15/owl-8285565_1280.png" alt="content" />
        <div className="flex">
          <button className="flex ml-auto rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500">
            <FavoriteBorderOutlinedIcon />
          </button>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <MessageOutlinedIcon />
          </button>
        </div>
      </div>
    </div>

  )
}

export default ReqPostCard

