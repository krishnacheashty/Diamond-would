import { useEffect, useState } from "react";

import initializedAuthentication from "../Login/login/firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signInWithPopup,signOut,onAuthStateChanged,signInWithEmailAndPassword,GoogleAuthProvider,updateProfile } from "firebase/auth";


initializedAuthentication()

const useFirebase=()=>{
  const[user,setUser]=useState({});
  const[error,setError]=useState('');
  const [isLoading,setIsLoading]=useState(true);
 

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
/* register */
    const registerUser=(email,password,name,history)=>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((usercon) => {
          setError('')
          const newUser={email, displayName: name}
          setUser(newUser)
          
          /* save user to data base */
          saveUser(email,name)
          // sand name to fire base
          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            
          }).catch((error) => {
            
          });
            history.replace('/');
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
            
        })
        .finally(()=>setIsLoading(false));

    }
  /* sign in google */
  const signInWthGoogle=(location,history)=>{
    setIsLoading(true)
    signInWithPopup(auth, googleProvider)
  .then((result) => {
    
    setError('')
    const destination=location?.state?.from || '/'   
    history.replace(destination)
  }).catch((error) => {
    const errorMessage = error.message;
    setError(errorMessage)
  })
  .finally(()=>setIsLoading(false));
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
              setIsLoading(false)
            });
            return()=>unsubscribe
    },[auth])


    // login 
    const loginUser=(email,password,history,location)=>{
      setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
  .then((user) => {
    /* kaz korche na */
    
    setError('');
    const destination=location?.state?.from || '/'   
    history.replace(destination)
  })
  .catch((error) => {
    const errorMessage = error.message;
    setError(errorMessage)
  })
  .finally(()=>setIsLoading(false));
    }


    // logout
    const logOut=()=>{
      setIsLoading(true)
        signOut(auth).then(() => {
            alert('do you want to logOut?')
            // Sign-out successful.
          }).catch((error) => {
            const errorMessage = error.message;
            // An error happened.
            setError(errorMessage)
          })
          .finally(()=>setIsLoading(false));
    }
    const saveUser=(email,displayName)=>{
      const user={email,displayName}
      fetch('http://localhost:5000/users',{
        method:'POST',
        headers:{
          'contain-type':'application/json'
        },
        body:JSON.stringify(user)
        
        
      })
      .then()
    }
    return{
        user,
        isLoading,
        error,
        registerUser,
        loginUser,
        logOut,
        signInWthGoogle
        
    }
}

export default useFirebase;