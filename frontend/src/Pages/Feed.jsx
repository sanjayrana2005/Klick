import React, { useEffect, useState } from 'react'
import { dummyPostsData } from '../assets/assets'
import Loading from '../Components/Loading'
import Storiesbar from '../Components/Soriesbar'

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
      <div>
        <Storiesbar/>
        <div className='p-4 space-y-6'>
          List of post
        </div>
      </div>
      {/* right sidebar */}
      <div>
        <div>
          <h1>Sponsered</h1>
          <h1>
            Recent messages
          </h1>
        </div>
      </div>
    </div>
  ) : <Loading height=""/>
}

export default Feed
