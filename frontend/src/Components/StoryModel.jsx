import { ArrowLeft, BadgeCheck, Sparkle, TextIcon, Upload } from 'lucide-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

function StoryModel({ close, fetchStories }) {
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
        toast.success("Story added")
    }

    return (
        <div className='fixed inset-0 z-110 min-h-screen bg-black/80 backdrop-blur text-white flex items-center justify-center p-4'>
            <div className='w-full max-w-md'>
                <div className='text-center mb-4 flex items-center gap-5 justify-between'>
                    <button onClick={close} className='text-white p-2 cursor-pointer'><ArrowLeft /></button>
                    <h2 className='text-lg font-semibold'>Create Story</h2>
                    <span className='w-10'></span>
                </div>
                <div className='rounded-lg h-96 flex items-center justify-center relative' style={{ backgroundColor: background }}>
                    {mode === "text" && (
                        <textarea
                            value={text}
                            autoFocus
                            className='bg-transparent text-white w-full h-full p-6 text-lg resize-none focus:outline-none' placeholder="What's on your mind?" onChange={(event) => setText(event.target.value)} />
                    )}
                    {
                        mode === "media" && previwURL && (
                            media?.type.startsWith("image") ? (
                                <img src={previwURL} alt="story image"
                                    className='object-contain max-h-full'
                                />
                            ) : (
                                <video src={previwURL} className='object-contain max-h-full' />
                            )
                        )
                    }
                </div>

                <div className='flex mt-4 gap-2'>
                    {
                        bgColor.map((color, index) => {
                            return <button key={index} className='w-6 h-6 rounded-full ring cursor-pointer' style={{ backgroundColor: color }} onClick={() => setBackground(color)} />
                        })
                    }
                </div>

                <div className='flex gap-2 mt-4'>
                    <button onClick={() => { setMode("text"); setMedia(null); setPreviewURL(null) }} className={`flex-1 flex items-center justify-center gap-2 cursor-pointer p-2 rounded ${mode === "text" ? "bg-white text-black" : "bg-zinc-800"}`}>
                        <TextIcon size={18} /> Text
                    </button>

                    <label className={`flex-1 flex items-center justify-center gap-2 p-2 rounded cursor-pointer ${mode === "media" ? "bg-white text-black" : "bg-zinc-800"}`}>
                        <input
                            onChange={(event) => { handleMediaUpload(event); setMode("media") }}
                            type="file" accept='image/*, video/*' className='hidden' />
                        <Upload size={18} />Photo/Video
                    </label>
                </div>

                <button onClick={handleCreateStory} className='flex items-center justify-center gap-2 text-white py-3 mt-4 w-full rounded bg-gradient-to-r from-indigo-500 to-purple-600  hover:from-indigo-600 hover:to-purple-700 cursor-pointer active:scale-95 transition'>
                    <Sparkle size={18} /> Create Story
                </button>
            </div>
        </div>
    )
}

export default StoryModel
