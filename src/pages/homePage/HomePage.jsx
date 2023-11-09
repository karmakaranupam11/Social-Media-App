import React from 'react'
import StoryCircle from '../../components/story/StoryCircle'
import RighPanel from '../../components/rightPanel/RighPanel'
import Post from '../../components/post/Post'
import CreatePost from '../../components/post/CreatePost'

const HomePage = () => {
    return (
        <div>
            <div className="mt-10 flex w-[100%] justify-center">

                <div className="w-[60%] mx-2.5">
                    <div className="flex space-x-2 p-4 border rounded-md justify-start w-full">
                        {[1, 1, 1, 1, 1, 1].map((item) => (<StoryCircle />))}
                    </div>
                    <div>
                        {[1, 1, 1, 1].map((item) => (<Post />))}
                    </div>
                </div>
                <div className=' mx-2.5 w-[35%]'>
                    <RighPanel />
                </div>

            </div>
            <CreatePost />
        </div>
    )
}

export default HomePage
