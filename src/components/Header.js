import { useNavigate } from "react-router";
import { auth } from "../utils/Firebase";
import {onAuthStateChanged, signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { addUser,removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO } from "../utils/constants";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
       
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          navigate("/browse");
          
          
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/")
        }
      });
      return ()=>unsubscribe(); // unsubscribe when component
},[])

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex items-center p-2">
          <img
            className="hidden md:block w-12 h-12 rounded-full"
            src={user?.photoURL}
            alt="usericon"
          />
          <h1>{user?.displayName}</h1>
          <button onClick={handleSignOut} className="font-bold text-white ml-4">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
