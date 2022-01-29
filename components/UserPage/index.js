import React,{ useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import "../UserPage/UserPage.css"
import Axios from 'axios';
import { Heroform1, Herorev, ButtonRev } from '../UserPage/form';

function UserPage () {
    // constructor (props){
    //     super(props);
    // }

    
      const[userList,setuserlist] = useState([]);
    
      useEffect (() => {
        Axios.get("http://localhost:3001/api/get").then ((response) => {
                setuserlist(response.data);
        });
    },[]);

    return (
        <>
          <div className="base-container">
          <div className="SignInnext">
            <Heroform1>
                <h1 style={{"text-align": "center"}}>Browse Movies and Tv Shows</h1>

                {userList.map((val)=> {
                  return( 
                  <div className='Sqlret'>
                  
                  
                  <p> Movie Name : {val.movie_title} <br/><br/>Movie Category : {val.category} <br/><br/> Movie Release : {val.release_year}  
                  <br/><br/> Main Actor : {val.main_actor} <br/><br/> Movie Rating : {val.rating} </p>
                  <img src={val.pics} alt='hello'/>
    
                  </div>
                 )
                })}
               
                <Herorev>

                <ButtonRev> <Link to='/Adminpage' className="btnlink">
                Clickhere  </Link>
                </ButtonRev>
                </Herorev>

            </Heroform1>
          </div>
       </div>
        </>
    )
}

export default UserPage