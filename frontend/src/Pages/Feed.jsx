import React, { useEffect, useState } from 'react'
import { assets, dummyPostsData } from '../assets/assets'
import Loading from '../Components/Loading'
import Storiesbar from '../Components/Soriesbar'
import PostCard from '../Components/PostCard'

function Feed() {
  const [feeds, setFeeds] = useState([])
  const [loading,setLoading]=useState(true)

  const fetchFeeds = async () => {
    setFeeds(dummyPostsData)
    setLoading(false)
  }

  useEffect(() => {
    fetchFeeds()
  }, [])
  return !loading ? (
    <div className='h-full overflow-y-scroll no-scroolbar py-10 xl:pr-5 flex items-start justify-center xl:gap-8'>
      {/* stories and post list */}
      <div className="flex-1 max-w-[650px]">
        <Storiesbar/>
        <div className='p-4 space-y-6'>
          {feeds.map((post,index)=>(
            <PostCard key={post._id} post={post}/>
          ))}
        </div>
      </div>
      {/* right sidebar */}
      <div className='max-xl:hidden sticky top-0'>
        <div className='max-w-xs bg-white text-xs p-4 rounded-md inline-flex flex-col gap-2 shadow'>
          <h3 className='text-slate-800 font-semibold'>Sponsered</h3>
          <img src={assets.sponsored_img} alt="sponsered image" className='w-75 h-50 rounded-md' />
          <p className='text-slate-600'>Email marketing</p>
          <p className='text-slate-400'>Supercharge your marketing with a powerful,easy-to-use platform built for results.</p>
          <h1>
            Recent messages
          </h1>
        </div>
      </div>
    </div>
  ) : <Loading height=""/>
}

export default Feed
