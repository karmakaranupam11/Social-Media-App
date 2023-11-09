import React, { useState } from 'react'
import { AiOutlineTable } from 'react-icons/ai'
import { RiVideoLine, RiVideoFill } from 'react-icons/ri'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ReqPostCard from './userDeatilsUtils/ReqPostCard';

const UserPosts = () => {


    const [activeTab, setActiveTab] = useState();

    const postsData = [
        {
            url: "https://cdn.pixabay.com/photo/2023/09/30/12/15/owl-8285565_1280.png"
        },
        {
            url: "https://cdn.pixabay.com/photo/2023/07/10/13/51/spider-8118409_1280.jpg"
        }
    ];

    const tabs = [
        {
            tab: "Posts",
            icon: <AiOutlineTable className='text-2xl' />,
            activeIcon: <AiOutlineTable className='text-2xl' />
        },
        {
            tab: "Reels",
            icon: <RiVideoLine className='text-2xl' />,
            activeIcon: <RiVideoFill className='text-2xl' />
        },
        {
            tab: "Saved",
            icon: <BookmarkBorderOutlinedIcon className='text-2xl' />,
            activeIcon: <BookmarkIcon className='text-2xl' />
        },
        {
            tab: "Tagged",
            icon: <AccountCircleIcon className='text-2xl' />,
            activeIcon: <AccountCircleOutlinedIcon className='text-2xl' />
        }

    ]


    return (
        <div>
            <div className='flex space-x-20 border-t relative'>
                {tabs.map((item) => <div className={`${activeTab === item.tab ? "border-t-2 border-black" : "opacity-60"} flex item-center cursor-pointer py-2 text-sm`} onClick={() => setActiveTab(item.tab)}>
                    <p>{activeTab === item.tab ? item.activeIcon : item.icon}</p>
                    <p className='ml-1'>{item.tab}</p>
                </div>)}
            </div>
            <div className='flex flex-wrap'>
                {[1, 11, 1, 1, 1, 1].map((item) => <ReqPostCard />)}
            </div>
        </div>
    )
}

export default UserPosts
