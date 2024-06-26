import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/Validate';
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from "../utils/Firebase";

import { useDispatch } from 'react-redux';
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVTAR } from '../utils/constants';
const Login = () => {
    const [isSignINForm,setSignInForm]=useState(true);
    const [errormessage,seterrormessage]=useState(null);
    const dispatch = useDispatch();
   
      const email=useRef(null);
      const password=useRef(null);
      const name=useRef(null);
      const handleButtonClick=()=>{
        // validating the form
        // console.log(email);
        const message= checkValidData(email.current.value,password.current.value);
        //   console.log(message);
          seterrormessage(message);

         if(message)return;
         // signin/signup logic
         if(!isSignINForm){
            // signup logic
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value,
      photoURL: USER_AVTAR
    })
      .then(() => {
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
       
      })
      .catch((error) => {
        seterrormessage(error.message);
      });
     
  })

    // console.log(user);
    // ...
    

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode + "_" + errorMessage)
    // ..
  });



         }
         else{
          // signin logic
          signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    //  console.log(user);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode + "_" + errorMessage)
  });


         }
           
          





      };






       const toggleSignInForm=()=>{
        setSignInForm(!isSignINForm);
       }
  return (
    <div>
        <Header/>
        <div className="absolute">
        <img  
        src={BG_URL}
        alt="logo"
       >
          </img>
          </div> 
          <form  onSubmit={(e)=>e.preventDefault()} className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
          <h1 className="font-bold text-3xl py-4">
            {isSignINForm ? "Sign IN":"Sign up"}

          </h1>
          {!isSignINForm && (
          <input
             ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />

      
        )}
       

          <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
          <p className="text-red-600 font-bold p-2 ">{errormessage}</p>
            <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
         
        onClick={handleButtonClick}>
          {isSignINForm ? "Sign In" : "Sign Up"}
        </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignINForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>




     
            




         

       
      
    </div>
   
   
  )
}

export default Login