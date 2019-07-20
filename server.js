/// Speak Soon***
const express = require( "express" );
const app = express();

const bodyParser = require( "body-parser" );
app.use( bodyParser.json() );

const path = require( "path" );

const mongoose = require( "mongoose" );
mongoose.connect( "mongodb://localhost/languages", { useNewUrlParser : true } );

/////////////////////
////////////////// Schema ////////////////////
var UserSchema = new mongoose.Schema({
    user_name: { type : String },
    password: { type : String },
    first_name: { type : String },
    spoken_language: { type : String },
    desired_language: { type : String }
})
/////////////////////
var User = mongoose.model( "User", UserSchema );
/////////////////////

mongoose.Promise = global.Promise;

app.use( express.static( __dirname + "/public/dist/public" ));

/////////////////////////////////////   Routes   ////////////////////
/////////////// CREATE a USER  /////////////////       CREATE a USER
app.post("/user", ( req, res ) => {
                                    console.log("POST data", req.body);
    let newUser = new User(req.body);
    
    newUser.save(( err ) => {
        if( err ){
            return res.json( { message : "Error", err : err });
        } else {
            return res.json({ message : "Success", newUser : newUser });
        }
    })
})
/////////////////////////////////////////////////////////////////////
/////////////// GET All USERs  /////////////////       GET All USERs
app.get("/users", (req, res) => {
    
    User.find({}, (err, users) => {
        
        if( err ){
            return res.json({message:"Error", err:err});
        } else {
            return res.json({message:"Success", users:users});
        }
    })  
})
/////////////////////////////////////////////////////////////////////
/////////////// GET one USER  /////////////////       GET one USER
app.get("/user/:id", (req, res) => {
    
    console.log(req.params.id);
    
    User.findById(req.params.id, (err, user) => {
        
        if( err ){
            return res.json({message:"Errrrrror", err:err});
        } else {
            return res.json({message:"Success", user:user});
        }
    }) 
})
/////////////////////////////////////////////////////////////////////
/////////////// DELETE a USER  /////////////////       DELETE a USER
app.delete("/user/:id", (req, res) => {
    
    User.remove( { _id: req.params.id }, (err, user) => {
        
        if( err ) {
            return res.json({message:"Error", err:err});
        } else {
            return res.json({message:"Successfully deleted user"});
        }
    })
})
/////////////////////////////////////////////////////////////////////
/////////////// UPDATE a USER  /////////////////       UPDATE a USER
app.put("/user/:id", (req, res) => {
    console.log(req.params.id);
    
    User.findById(req.params.id, (err, user) => {
        
        if( err ){
            return res.json({message:"Error", err:err});
        }
        else {
            //conditonals.........
        }
    })
})
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"));
})
/////////////////////////////////////            ////////////////////
const port = 8000;
/////////////////////////////////////            ////////////////////
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})