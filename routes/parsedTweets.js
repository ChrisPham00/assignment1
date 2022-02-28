var express = require('express');
var router = express.Router();
const data = require(__dirname + '/favs.json')
const fs = require ('fs');
const bodyparse = require("body-parser")
const body =bodyparse.json()

//GET request handler (Show all tweets, show user IDs, get tweet based on tweet ID)
router.get('/', (req, res, next) =>{

  //Reads the favs.json file 
  fs.readFile(__dirname +'/favs.json',(err,tweet)=>{

    //Checks for errors
    if(err) {
      throw err;
    }

    //Otherwise, send read json file with status 200
    else{
      res.status(200).send(tweet)
    }
  })
})

//POST request handler (Create new Tweet)
router.post('/',body, (req,res,next) =>{

  //Reads the favs.json file
  fs.readFile(__dirname +'/favs.json',(err,tweet)=>{

    //Checks for errors
    if(err) {
      throw err;
    }

    //Otherwise
    else{

      //Parse the read file to create a JSON object array
      var file = JSON.parse(tweet)
      
      //Gets the desired tweet ID and text for tweet from
      //client side
      var id = req.body.id
      var text = req.body.text
      
      //Creates object with details of new tweet(date,tweet ID, and text)
      var jobject = {
        "created_at" : Date(),
        "id" :id,
        "text": text
      }
      
      //Pushes into the parsed JSON object array
      file.push(jobject)

      //Writes to favs.json file to save changes
      fs.writeFile(__dirname +'/favs.json',JSON.stringify(file),(err)=>{

        //Checks for errors
        if(err){
          throw err;
        }
    })

    //Sends read json file with status 200
    res.status(200).send(tweet)
    }
  })
})

//PUT request handler (update screen name)
router.put('/',body, (req,res,next) =>{

  //Reads the favs.json file
  fs.readFile(__dirname +'/favs.json',(err,tweet)=>{

    //Checks for errors
    if(err){
      throw err;
    }

    //Otherwise,
    else{
    
      //Parse the read file to create a JSON object array
      var file = JSON.parse(tweet)

      //Gets the old screen name and the desired new screen
      //name from the client side
      var oldScreenName = req.body.oldScreenName
      var newScreenName = req.body.newScreenName

      //Iterates through the object array
      for (tweet in file){

        //If the screen name is equal to the old screen name
        //(the one we want to update)
        if (file[tweet].user.screen_name == oldScreenName){

          //Change the screen name to the new screen name 
          file[tweet].user.screen_name = newScreenName
        }
      }

      //Writes to favs.json file to save changes
      fs.writeFile(__dirname + '/favs.json',JSON.stringify(file),(err) =>{
    
        //Checks for erros
        if (err)throw err;
      })
    }

    //Sends read json file with status 200
    res.status(200).send(tweet)
  })
})

//DELETE request handler (delete tweet)
router.delete('/',body, (req,res,next) =>{

  //Reads the favs.json file
  fs.readFile(__dirname +'/favs.json',(err,tweet)=>{
    
    //Checks for errors
    if(err){
      throw err;
    } 

    //Otherwise,
    else{
    
      //Gets the id of tweet we want to delete from client side
      var idToDelete = req.body.id;
      
      //Parse the read file to create a JSON object array
      var file = JSON.parse(tweet)

      //Creates a counter so we know where to delete
      let counter = 0

      //Iterates through the object array
      for (tweet in file){

        //If the id of the tweet matches the id that we want to delete
        if (file[tweet].id == idToDelete){

          //Delete(splice) the details matching with that id
          file.splice(counter,1)
        }
        
        //Increments counter
        counter++
      }

      //Writes to favs.json file to save changes
      fs.writeFile(__dirname + '/favs.json',JSON.stringify(file),(err) =>{
    
        //Checks for errors
        if (err){
          throw err;
        }
      })
    }
    //Sends read json file with status 200
    res.status(200).send(tweet)
  })
  
})

//Exports for use in app
module.exports = router;


