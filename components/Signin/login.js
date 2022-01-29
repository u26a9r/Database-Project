import React,{ useState} from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios';
import './style.css'
import { Heroform } from './form';

function Login () {
    // constructor (props){
    //     super(props);
    // }
  
      const[userMail,setusermail] = useState("");
      const[userPass,setuserpass] = useState("");
    
      const submitReview = () => {
        Axios.post("http://localhost:3001/api/check", {userMail:userMail, userPass:userPass}).then (()=>{
              alert("Successfully login");
        });
    };  

    return (
        <>
          <div className="base-container">
          <div className="SignIn">
            <Heroform>
                <h1>Sign In</h1>
                <input type = "email" autoComplete="off" placeholder="Email Address" name = "username"  onChange ={(e) => {
                setusermail(e.target.value);
                }}/> 
                <input type = "password" autoComplete="off" placeholder="Password" name = "userpass" onChange ={(e) => {
                setuserpass(e.target.value);
                }}/>

                <button onClick={submitReview}> <Link to='/data' className="btnlink">
                Sign In  </Link>
                </button>
                <label><input type="checkbox" value="Remember me"/>Remember Me</label>
            </Heroform>
          </div>
       </div>
        </>
    )
}

export default Login

