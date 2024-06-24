import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'
function MovieCard({posterPath}) {
  return (
    <div className='w-48 pr -4 mx-2'>
     <img alt="Movie card"
     src={IMG_CDN_URL+posterPath}
     />
    </div>
  )
}


export default MovieCard