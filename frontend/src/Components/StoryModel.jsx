import { ArrowLeft } from 'lucide-react'
import React, { useState } from 'react'

function StoryModel({close,fetchStories}) {
    const bgColor = ["#4f46e5", "#7c3aed", "#db2777", "#e11d48", "#ca8a04", "#0d9488"]

    const [mode, setMode] = useState("text")
    const [background, setBackground] = useState(bgColor[0])
    const [text, setText] = useState("")
    const [media, setMedia] = useState(null)
    const [previwURL, setPreviewURL] = useState(null)

    const handleMediaUpload = (event) => {
        const file = event.target.files?.[0]
        if (file) {
            setMedia(file)
            setPreviewURL(URL.createObjectURL(file))
        }
    }

    const handleCreateStory = () => {

    }

    return (
        <div className='fixed inset-0 z-110 min-h-screen bg-black/80 backdrop-blur text-white flex items-center justify-center p-4'>
            <div className='w-full max-w-md'>
                <button onClick={close} className='text-white p-2 cursor-pointer'><ArrowLeft/></button>
                <h2 className='text-lg font-semibold'>Create Story</h2>
                <span className='w-10'></span>
            </div>
        </div>
    )
}

export default StoryModel
