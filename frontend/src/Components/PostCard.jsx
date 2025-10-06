import { BadgeCheck } from 'lucide-react'
import React from 'react'
import moment from "moment"

const PostCard = ({ post }) => {
    return (
        <div className='bg-white rounded-xl shadow p-4 space-y-4 w-full'>
            {/* user info */}
            <div className='inline-flex items-center gap-3 cursor-pointer'>
                <img src={post.user.profile_picture} alt="user profile" className='w-10 h-10 rounded-full shadow' />
                <div>
                    <div className='flex items-center space-x-1'>
                        <span>{post.user.full_name}</span>
                        <BadgeCheck className='w-4 h-4 text-blue-500' />
                    </div>
                    <div className='text-gray-500 text-sm'>
                        @{post.user.username} • {moment(post.createdAt).fromNow()}
                    </div>
                </div>
            </div>

            {/* Content */}
            {post.content && <div className='text-gray-800 text-sm whitespace-pre-line' dangerouslySetInnerHTML={{__html:post.content}}/>}

            {/* images */}
            <div className='grid grid-cols-2 gap-2'>
{
    post.image_urls.map((img,index)=>{
        return <img src={img} className={`w-full h-48 object-cover rounded-lg ${post.image_urls.length === 1 && 'col-span-2 h-auto'}`}/>
    })
}
            </div>
        </div>
    )
}

export default PostCard
