
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import { auth, db, storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Add from '../img/addAvatar.png'
import { doc, setDoc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
const Register = () => {
  const [err,setErr] = useState(false);
  const navigate = useNavigate()
  const handleSubmit =async (e) =>{
    e.preventDefault();
    const userName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    
    try {
      const res = await createUserWithEmailAndPassword(auth,email,password);
      

const storageRef = ref(storage, userName);

const uploadTask = uploadBytesResumable(storageRef, file);


uploadTask.on(
  (error) => {
    setErr(true);
  }, 
  () => {
   
    getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
      try {
        await updateProfile(res.user,{
          userName,
          photoURL: downloadURL
        })
  
        await setDoc(doc(db,"users",res.user.uid),{
          uid: res.user.uid,
          userName,
          email,
          photoURL: downloadURL
        })
  
        await setDoc(doc(db,"userChats",res.user.uid),{});
        navigate("/")
      } catch (error) {
        console.log(error)
        setErr(true)
      }
     
    });
  }
);
    } catch (error) {
      setErr(true)
    }
  }
  return (
    <div className='form-container'>
      <div className="form-wrapper">
        <span className="logo">Coder Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='username' />
            <input type="email" placeholder='email' />
            <input type="password" placeholder='password' />
            <input style={{display: "none"}} type="file" id='file' />
            <label htmlFor="file">
                <img src={Add} alt="" />
                <span>Add an account</span>
            </label>
            <button>Sign up</button>
            {err && <span>Something anything...</span>}
        </form>
        <p>You do have an account? <Link to="register">Login</Link></p>
      </div>
    </div>
  )
}

export default Register