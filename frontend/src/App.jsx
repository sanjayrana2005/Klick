import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'
import Feed from './Pages/Feed'
import Messages from './Pages/Messages'
import ChatBox from './Pages/ChatBox'
import Connection from './Pages/Connection'
import Discover from './Pages/Discover'
import Profile from './Pages/Profile'
import CreatePost from './Pages/CreatePost'
import { useUser } from '@clerk/clerk-react'
import Layout from './Pages/Layout'
import {Toaster} from "react-hot-toast"

function App() {
  const { user } = useUser()
  return (
    <>
    <Toaster/>
      <Routes>
        <Route path='/' element={!user ? <Login /> : <Layout />} >
          <Route index element={<Feed />} />
          <Route path='messages' element={<Messages />} />
          <Route path='messages/:userId' element={<ChatBox />} />
          <Route path='connections' element={<Connection />} />
          <Route path='discover' element={<Discover />} />
          <Route path='profile' element={<Profile />} />
          <Route path='profile/:profileId' element={<Profile />} />
          <Route path='create-post' element={<CreatePost />} />
        </Route>

      </Routes>
    </>
  )
}

export default App

