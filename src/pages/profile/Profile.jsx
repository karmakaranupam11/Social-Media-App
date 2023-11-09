import React from 'react'
import UserDetails from '../../components/profile/UserDetails'
import UserPosts from '../../components/profile/UserPosts'
import ReqPostCard from '../../components/profile/userDeatilsUtils/ReqPostCard'

const Profile = () => {
    return (
        <div className='px-10'>
            <div>
                <UserDetails />
            </div>
            <div>
                <UserPosts />
            </div>
            <div>
                <ReqPostCard />
            </div>
        </div>
    )
}

export default Profile
