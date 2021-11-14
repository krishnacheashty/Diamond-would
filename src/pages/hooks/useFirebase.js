import { useEffect, useState } from "react";
import initializedAuthentication from "../Login/login/firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword } from "firebase/auth";
initializedAuthentication()

const useFirebase=()=>{
    const[user,setUser]=useState({});
    const[error,setError]=useState('');

    const auth = getAuth();

    const registerUser=(email,password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorMessage = error.message;
            
        });

    }


    // user login or not to find
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,(user)=>{
            if (user) {
                setUser(user)
              } else {
                // User is signed out
                setUser({})
              }
            });
            return()=>unsubscribe
    },[auth])


    // login 
    const loginUser=(email,password)=>{
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
  })
  .catch((error) => {
    const errorMessage = error.message;
  });
    }


    // logout
    const logOut=()=>{
        signOut(auth).then(() => {
            alert('successfully log out')
            // Sign-out successful.
          }).catch((error) => {
            const errorMessage = error.message;
            // An error happened.
          });
    }
    return{
        user,
        registerUser,
        loginUser,
        logOut
    }
}

export default useFirebase;