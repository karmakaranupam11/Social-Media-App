import React, { useState } from 'react'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import CommentArea from '../comment/CommentArea';

const Post = (props) => {

    const [isPostLiked, setIsPostLiked] = useState(false);
    const [isPostSaved, setIsSaved] = useState(false);

    const [isCommentAreaVisible, setIsCommentAreaVisible] = useState(false);

    const toggleCommentAreaVisibility = () => {
        setIsCommentAreaVisible(!isCommentAreaVisible);
    };

    const { postData } = props;

    return (
        <div>
            <div class="bg-gray-100 p-4 flex justify-center">
                <div class="bg-white border rounded-md w-[95%]">

                    {/* user details  */}

                    <div class="flex items-center px-4 py-3">
                        <img class="h-8 w-8 rounded-full" src="https://picsum.photos/id/1027/150/150" />
                        <div class="ml-3 ">
                            <span class="text-sm font-semibold antialiased block leading-tight">Username</span>
                            <span class="text-gray-600 text-xs block">Location</span>
                        </div>
                    </div>

                    {/* The post  */}
                    <img src="https://picsum.photos/id/244/900/900" />

                    <div class="flex items-center justify-between mx-4 mt-3 mb-2">
                        <div class="flex gap-5">
                            {/* like */}
                            {isPostLiked ?
                                <FavoriteOutlinedIcon onClick={() => setIsPostLiked(!isPostLiked)} className='cursor-pointer' style={{ color: 'red' }} />
                                :
                                <FavoriteOutlinedIcon onClick={() => setIsPostLiked(!isPostLiked)} className='cursor-pointer' style={{ color: 'gray' }} />

                            }

                            {/* comment */}
                            <svg className="cursor-pointer" fill="#262626" height="20" viewBox="0 0 48 48" width="24" onClick={toggleCommentAreaVisibility}><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg>
                            {/* share */}
                            <svg className="cursor-pointer" fill="#262626" height="20" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                        </div>
                        <div class="flex">
                            {/* save */}
                            {isPostSaved ? <BookmarkOutlinedIcon onClick={() => setIsSaved(!isPostSaved)} style={{ color: '#fcc200' }} className='cursor-pointer' /> : <BookmarkBorderOutlinedIcon onClick={() => setIsSaved(!isPostSaved)} className='cursor-pointer' />}
                        </div>
                    </div>
                    <div className="font-semibold text-sm mx-4 mt-2 mb-1">92,372 likes</div>
                    <div className="font-semibold opacity-50 cursor-pointer text-sm mx-4 mt-1 mb-1">View all 10 comments</div>
                    <div className='p-5 w-[100%]'>
                        <input className='commentInput w-[90%] text-sm outline-none' placeholder='Add a comment...' />
                        <button>post</button>
                        <CommentArea isVisible={isCommentAreaVisible} />

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Post
