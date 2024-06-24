import { createSlice } from "@reduxjs/toolkit";


const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        TrailerVideo:null,
        PopularMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.PopularMovies=action.payload;
        },

        addTrailerVideo:(state,action)=>{
            state.TrailerVideo=action.payload;
        }
    },

});

  export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies}=moviesSlice.actions;
  export default moviesSlice.reducer;