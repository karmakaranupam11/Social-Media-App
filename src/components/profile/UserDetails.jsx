import React from 'react'
import Stats from './userDeatilsUtils/Stats'
import { BsGearFill } from "react-icons/bs"


// Contains the user details 

const UserDetails = () => {

    const user = {
        summary: "I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me! The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!",
        post: "20",
        followers: "1.2k",
        following: "1.3k"
    }

    return (
        <div className='py-10 w-full'>
            <div className='flex item-centre  border p-5'>
                <div className='w-[25%]'>
                    <img className="w-32 h-32 rounded-full" src="https://cdn.pixabay.com/photo/2018/08/21/23/29/forest-3622519_1280.jpg" alt="" />
                </div>
                <div>
                    <div>
                        <Stats user={user} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserDetails
