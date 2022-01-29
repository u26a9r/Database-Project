import React, {useState,useEffect} from 'react'
import Axios from 'axios';

import { Reviewform,Reviewform1,Reviewform2,Reviewform3,Reviewform4,Reviewform5,Reviewform6,InputReview,RevBtn,InputReview2,RevBtn2,Head6,Head1,Head2,Head3,Head4,Head5,Para,Para1 } from './AdminElements';

function AdminPage () {
    // constructor (props){
    //     super(props);
    // }
  
    const[userMovie,setusermovie] = useState("");
    const[userReview,setuserreview] = useState(""); 
    const[userMovid,setuserMovid] = useState("");
    const[userMovname,setuserMovname] = useState("");
    const[userMovcat,setuserMovcat] = useState("");
    const[userMovrel,setuserMovrel] = useState("");
    const[userMovact,setuserMovact] = useState("");
    const[userMovrat,setuserMovrat] = useState("");
    const[userMovpos,setuserMovpos] = useState("");
    const[userMoviddel,setuserMoviddel] = useState("");
    const[userMovnameup,setuserMovnameup] = useState("");
    const[userMovrev,setuserMovrev] = useState("");
    const[userList,setuserlist] = useState([]);

    
      useEffect (() => {
        Axios.get("http://localhost:3001/api/getreview").then ((response) => {
                setuserlist(response.data);
        });
    },[]);
    
    const submitReview = () => {
        Axios.post("http://localhost:3001/api/check2", {userMovie:userMovie, userReview:userReview}).then (()=>{
              alert("Successfully insert");
        });
    }; 
    const submitReview2 = () => {
        Axios.post("http://localhost:3001/api/check3", {userMovid:userMovid, userMovname:userMovname, userMovcat:userMovcat, userMovrel:userMovrel, userMovact:userMovact, userMovrat:userMovrat, userMovpos:userMovpos}).then (()=>{
              alert("Successfully insert");
        });
    }; 
 
    const submitReview3 = () => {
        Axios.post("http://localhost:3001/api/check5", {userMoviddel:userMoviddel}).then (()=>{
              alert("Successfully delete");
        });
    };

    const submitReview4 = () => {
        Axios.post("http://localhost:3001/api/check7", {userMovrev:userMovrev,userMovnameup:userMovnameup}).then (()=>{
              alert("Successfully update");
        });
    };

    return (
        <>
               <Reviewform>
                 <Head1>Audience Reviews</Head1>
                  <InputReview type = "text" autoComplete="off" placeholder="Movie Name" name = "moviename"  onChange ={(e) => {
                setusermovie(e.target.value);
                }}/>
                
                <InputReview type = "text" autoComplete="off" placeholder="What do you think about this movie" name = "moviereview"  onChange ={(e) => {
                setuserreview(e.target.value);
                }}/>

                <RevBtn onClick={submitReview}>
                    Submit Review.
                </RevBtn>
              </Reviewform>
              
              <Reviewform1>
              <Head2>Shares Reviews</Head2>
              {userList.map((val)=> {
                  return( 
                  <Para> Movie Name : {val.movie_title} <br/><br/>Review : {val.movie_review} <br/><br/>By : {val.user_name} <br/></Para>
                 )
                })}
              </Reviewform1>
              
              <Reviewform2>
              <Head2>Admin View</Head2>
                <Reviewform3>
                <Head3>View of Reviews</Head3>
                    {userList.map((val)=> {
                        return( 
                        <Para1> Movie Name : {val.movie_title} <br/>Review : {val.movie_review} <br/>By : {val.user_name} <br/></Para1>
                        )
                        })}
                </Reviewform3>

                <Reviewform4>
                <Head4>Add Movies</Head4>
                <InputReview2 type = "number" autoComplete="off" placeholder="Movie Id" name = "moviename"  onChange ={(e) => {
                setuserMovid(e.target.value);
                }}/>
                <InputReview2 type = "text" autoComplete="off" placeholder="Movie Name" name = "moviename"  onChange ={(e) => {
                setuserMovname(e.target.value);
                }}/>
                <InputReview2 type = "text" autoComplete="off" placeholder="Movie Genre" name = "category"  onChange ={(e) => {
                setuserMovcat(e.target.value);
                }}/>
                <InputReview2 type = "number" autoComplete="off" placeholder="Releasing on" name = "releasedate"  onChange ={(e) => {
                setuserMovrel(e.target.value);
                }}/>
                <InputReview2 type = "text" autoComplete="off" placeholder="Lead Actor" name = "mainactor"  onChange ={(e) => {
                setuserMovact(e.target.value);
                }}/>
                <InputReview2 type = "number" autoComplete="off" placeholder="Ratings" name = "rating"  onChange ={(e) => {
                setuserMovrat(e.target.value);
                }}/>
                <InputReview2 type = "text" autoComplete="off" placeholder="Picture" name = "pics"  onChange ={(e) => {
                setuserMovpos(e.target.value);
                }}/>
                <RevBtn2 onClick={submitReview2}>
                    Add Movie
                </RevBtn2>
                    
                </Reviewform4>

                <Reviewform5>
                <Head5>Drop out Movies</Head5>
                <InputReview2 type = "number" autoComplete="off" placeholder="Movie Id" name = "movieida"  onChange ={(e) => {
                setuserMoviddel(e.target.value);
                }}/>
                <RevBtn2 onClick={submitReview3}>
                    Drop Movie
                </RevBtn2>
                </Reviewform5>
                
                <Reviewform6>
                <Head6>Edit Review</Head6>
                <InputReview2 type = "text" autoComplete="off" placeholder="Movie Name" name = "movienameup"  onChange ={(e) => {
                setuserMovnameup(e.target.value);
                }}/>
                <InputReview2 type = "text" autoComplete="off" placeholder="Movie Review" name = "movierev"  onChange ={(e) => {
                setuserMovrev(e.target.value);
                }}/>
                <RevBtn2 onClick={submitReview4}>
                    Update
                </RevBtn2>
                </Reviewform6>

              </Reviewform2>
              
        </>
    )
}

export default AdminPage

