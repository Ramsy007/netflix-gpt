import React from 'react'
import MovieCard from './MovieCard'

function MovieList({title,movies}) {
    // console.log(movies);
  return (
    <div className="px- 4 ">
           <h1 className="text -3xl py-2 px-2 text-white ">{title}</h1>
         <div className='flex overflow overflow-x-scroll'>
           
            <div className='flex '> 
                {movies?.map((movie)=>(<MovieCard key={movie.id} posterPath={movie.poster_path}/>))}
            </div>
         </div>
        
    </div>
  );
}

export default MovieList