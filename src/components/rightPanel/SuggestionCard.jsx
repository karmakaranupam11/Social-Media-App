import React from 'react'

const SuggestionCard = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex item-center'>
        <img className='w-9 h-9 rounded-full' src="https://cdn.pixabay.com/photo/2023/10/11/09/27/fox-8308116_1280.jpg" alt="" />
         <div className='ml-2'>
            <p className='text-sm font-semibold'>username</p>
            <p className='text-sm font-semibold opacity-70m'>Follows you</p>
         </div>
      </div>
      <p className='text-blue-700 text-sm font-semibold'>Follow</p>
    </div>
  )
}

export default SuggestionCard
