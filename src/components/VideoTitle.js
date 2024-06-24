import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=" w-screen aspect-video pt-[25%]  px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-6xl font-bold text-white">{title}</h1>
        <p className="py-6 text-lg w-1/4 ">{overview}</p>
        <div >
            <button className=" bg-grey- bg-gray-500 text-black p-4 px-16 text-xl  rounded-lg hover:bg-opacity-80">⛷️play</button>
            <button className=" mx-2 bg-gray-500 text-white p-4 px-16 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80">moreInfo</button>
        </div>
    </div>
  )
}

export default VideoTitle;