import axios from 'axios';
import React,{useState} from 'react';
import { Redirect } from 'react-router-dom';
import Profile from './Profile';

const Login = () => {
    const [info,setInfo]=useState(" ");
    const [name,setName]=useState(" ");
    const [password,setPassword]=useState(" ");
    const [successful,setSuccessful]=useState(false);
    const url="https://www.google.com";

    const submitHandler =(e)=>{
       e.preventDefault();
       async function submitData(){
           const {data} = await axios.post(url);
           setInfo(data);
           setSuccessful(true);
       }
      submitData();
      }
  return (
    <>
      <form  onSubmit={submitHandler}>
         <input type="text" value={name} onChange ={(e)=> setName(e.target.value)} />
         <input type="password" value={password} />
         onChange ={(e)=>setPassword(e.target.value)}
       </form>

     { successful? <Profile name={name} password={ password }/> : <Redirect to ="/login" />}
      
    </>
  );
}

export default Login;
