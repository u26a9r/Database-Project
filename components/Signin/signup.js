import React,{ useState} from 'react'
import "../Signin/style.css"
import Axios from 'axios';
import { Heroform } from './form';

function Signup() {
    // constructor (props){
    //     super(props);
    // }

  const[userName,setusername] = useState("");
  const[userMail,setusermail] = useState("");
  const[userPass,setuserpass] = useState("");


  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {userName:userName , userMail:userMail, userPass:userPass}).then (()=>{
          alert("successful Insert");
    });
};  

    return (
        <>
          <div className="base-container">
          <div className="SignIn">
            <Heroform>
                <h1>Sign Up</h1>
                <input type = "text" autoComplete="off" placeholder="Username" name = "username" onChange ={(e) => {
                setusername(e.target.value);
                }}  />
                <input type = "email" autoComplete="off" placeholder="Email Address" name = "usermail" onChange ={(e) => {
                setusermail(e.target.value);
                }} /> 
                <input type = "password" autoComplete="off" placeholder="Password" name = "userpass" onChange ={(e) => {
                setuserpass(e.target.value);
                }}/>

                <button onClick = {submitReview}>Sign Up</button>
                <label><input type="checkbox" value="Remember me"/>Remember Me</label>  

            </Heroform>
          </div>
       </div>
        </>
    )
}

export default Signup

