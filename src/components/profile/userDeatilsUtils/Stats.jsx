import React from 'react'
import { BsGearFill } from "react-icons/bs"

const Stats = (props) => {

    const { user } = props;

    return (

        <section class="py-1 leading-6 text-900 sm:py-5 lg:py-1">
            <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

                <div className='flex space-x-10 items-center w-full sm:p-4 px-4 mb-1'>
                    <button class="bg-white hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        Edit Profile
                    </button>
                    <BsGearFill className='text-2xl cursor-pointer'/>
                </div>

                <div class="w-full sm:p-4 px-4 mb-1">
                    <h1 class="title-font font-medium text-xl mb-2 text-gray-900">Username</h1>
                    <div class="leading-relaxed">{user.summary}</div>
                </div>

                <div class="mt-1 grid grid-cols-1 gap-6 divide-200 sm:grid-cols-2 md:gap-8 lg:mt-1 lg:grid-cols-4 lg:divide-x">

                    <div class="border-b border-200 py-5 px-6 lg:border-b-0">
                        <div class="flex items-center">
                            <h3 class="relative ml-2 inline-block text-4xl font-bold leading-none">
                                <span class="absolute -top-4 h-2 w-full bg-pink-200"></span>
                                {user.post}
                            </h3>
                            <span class="ml-3 text-base font-medium capitalize">Posts</span>
                        </div>
                    </div>

                    <div class="border-b border-200 py-5 px-6 lg:border-b-0">
                        <div class="flex items-center">
                            <h3 class="relative ml-2 inline-block text-4xl font-bold leading-none">
                                <span class="absolute -top-4 h-2 w-full bg-pink-200"></span>
                                {user.followers}
                            </h3>
                            <span class="ml-3 text-base font-medium capitalize">Followers</span>
                        </div>
                    </div>

                    <div class="border-b border-200 py-5 px-6 lg:border-b-0">
                        <div class="flex items-center">
                            <h3 class="relative ml-2 inline-block text-4xl font-bold leading-none">
                                <span class="absolute -top-4 h-2 w-full bg-pink-200"></span>
                                {user.following}
                            </h3>
                            <span class="ml-3 text-base font-medium capitalize">Following</span>
                        </div>
                    </div>

                    {/* <div class="border-b border-200 py-10 px-6 lg:border-b-0">
                        <div class="flex items-center">
                            <h3 class="relative ml-2 inline-block text-4xl font-bold leading-none">
                                <span class="absolute -top-4 h-2 w-full bg-pink-200"></span>
                                99%
                            </h3>
                            <span class="ml-3 text-base font-medium capitalize">Happy Customers</span>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>


    )
}

export default Stats
