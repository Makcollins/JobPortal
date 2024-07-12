import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';
import { FcGoogle } from "react-icons/fc";

const FirebaseLogin = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const handleLogin = () => {
        signInWithPopup(auth, googleProvider) .then((result) => {

            
            const user = result.user;
            console.log(user);
            
          }).catch((error) => {
          
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
        
    }
  return (
   <>
   <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleLogin} >
              <FcGoogle className='mt-1 mr-4' />Sign in with Google
            </button>
   </>
  )
}

export default FirebaseLogin;