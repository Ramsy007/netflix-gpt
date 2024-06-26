import { useNavigate } from "react-router";
import { auth } from "../utils/Firebase";
import {onAuthStateChanged, signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { addUser,removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
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
      const handleGptSearchClick=()=>{
          // toggle gpt search
          dispatch(toggleGptSearchView());
      }
      const handleLanguageChange=(e)=>{
        //  console.log(e.target.value);
          dispatch(changeLanguage(e.target.value))
      }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex  p-2">
           { showGptSearch && <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
            {
              SUPPORTED_LANGUAGES.map((lang)=>(
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}

                </option>
              ))
            }
           </select>}
           <button className="py-2 px-4 mx-4 my-2 bg- bg-purple-800 text-white rounded-lg" onClick={handleGptSearchClick}>{showGptSearch ? "Homepage": "GPTSEARCH"}</button>
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
