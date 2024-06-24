import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux';

import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {
    
    const trailerVideo=useSelector(store=>store.movies?.TrailerVideo);
     useMovieTrailer(movieId);

  return (
    <div className="w-screen" >
        <iframe className="w-screen aspect-video" 
         src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" >
        </iframe>
        </div>
  )
}

export default VideoBackground;
// actully there  is two way we can make our trailer dynamic first one is by using state variable and second one is using redux below by using state variabe thing are mention 
// const [trailerId,setTrailerId]=useState(null);
// now  setTrailerId(trailer.key); and after that src={"https://www.youtube.com/embed/"+trailerId}

