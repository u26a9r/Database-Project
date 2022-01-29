const express = require("express");
const bodyParser = require ("body-parser");
const cors = require("cors");
const app = express();
const mysql = require ('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'databse_password to be enter',
    database: 'database',

});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}));  

app.get("/api/get", (req,res) => {

    const sqlSelect = "SELECT * FROM movies";
    db.query(sqlSelect, (err,result)=>{
        res.send (result);
    });
});

app.get("/api/getreview", (req,res) => {

    const sqlSelect = "SELECT movie_title,movie_review,user_name FROM review,signup where id=user_id";
    db.query(sqlSelect, (err,result)=>{
        res.send (result);
    });
});

app.post("/api/insert", (req,res) => {

    const userName = req.body.userName;
    const userMail = req.body.userMail;
    const userPass = req.body.userPass;

    const sqlInsert = "INSERT INTO signup(user_name,user_mail,user_pass)VALUES(?,?,?)";
    db.query(sqlInsert, [userName,userMail,userPass], (err,result)=>{
            console.log (result);
    });
});

app.post("/api/check", (req,res) => {

    const userMail = req.body.userMail;
    const userPass = req.body.userPass;

    const sqlSelect = "SELECT user_mail,user_pass from signup";
    db.query(sqlSelect, [userMail,userPass], (err,result)=>{
            console.log (result);
    });
});

app.post("/api/check2", (req,res) => {

    const userMovie = req.body.userMovie;
    const userReview = req.body.userReview;

    const sqlInsert = "INSERT INTO review(movie_title,movie_review)VALUES(?,?)";
    db.query(sqlInsert, [userMovie,userReview], (err,result)=>{
            console.log (result);
    });
});

app.post("/api/check3", (req,res) => {

    const userMovid = req.body.userMovid;
    const userMovname = req.body.userMovname;
    const userMovcat = req.body.userMovcat;
    const userMovrel = req.body.userMovrel;
    const userMovact = req.body.userMovact;
    const userMovrat = req.body.userMovrat;
    const userMovpos = req.body.userMovpos;

    const sqlInsert = "INSERT INTO movies(id,movie_title,category,release_date,main_actor,rating,pics)VALUES(?,?,?,?,?,?,?)";
    db.query(sqlInsert, [userMovid,userMovname,userMovcat,userMovrel,userMovact,userMovrat,userMovpos], (err,result)=>{
            console.log (result);
    });
});

app.post("/api/check5", (req,res) => {

    const userMoviddel = req.body.userMoviddel;

    const sqlInsert = "DELETE FROM movies where id = ?";
    db.query(sqlInsert, [userMoviddel], (err,result)=>{
            console.log (result);
    });
});

app.post("/api/check7", (req,res) => {

    const userMovnameup = req.body.userMovnameup;
    const userMovrev = req.body.userMovrev;

    const sqlUpdate = "UPDATE review SET movie_review = ? where movie_title = ?";
    db.query(sqlUpdate, [userMovrev,userMovnameup], (err,result)=>{
            console.log (result);
    });
});

app.listen (3001, () => {
    console.log("running on port 3001");
});
