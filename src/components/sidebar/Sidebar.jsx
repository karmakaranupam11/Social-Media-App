import React, { useState } from 'react'
// import testLogo from '../images/logo.png'
import { IoReorderThreeOutline } from "react-icons/io5"
import menue from './SidebarConfiguration'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

    const [activeTab, setActiveTab] = useState();
    const navigate = useNavigate();

    const handleTabClick = (title) => {
        setActiveTab(title)
        if (title === "Profile") {
            navigate("/username")
        }
        else if (title === "Home") {
            navigate("/")
        }
    }

    return (
        <div className='sticky top-0 h-[100vh]'>
            <div className='flex flex-col justify-center h-full px-10'>
                <div>
                    <div className='pt-10 '>
                        {/* logo */}
                        <img className='w-40' src="https://i.imgur.com/zqpwkLQ.png" alt='instagram' />
                    </div>
                    <div className='mt-10'>
                        {menue.map((item) => <div onClick={() => handleTabClick(item.title)} className='flex items-center mb-5 cursor-pointer text-lg'>
                            {activeTab === item.title ? item.activeIcon : item.icon}
                            <p className={`${activeTab === item.title ? "font-bold" : "font-semibold"}`} style={{ color: activeTab === item.title ? '#d62976' : 'initial' }}>{item.title}</p>
                        </div>
                        )}
                    </div>
                </div>
                <div className='flex items-center cursor-pointer pb-10'>
                    <IoReorderThreeOutline className='text-2xl mr-5' />
                    <p className='font-semibold'>More</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
