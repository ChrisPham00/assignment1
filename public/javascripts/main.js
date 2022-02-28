//Function to show all tweets when Get All Tweets button is clicked
function showAllTweets() {

    //Clears all popup text on the screen 
    document.getElementById("showTweet").innerHTML = ""
    document.getElementById("showHeader").innerHTML =""
    document.getElementById("deleted").innerHTML = ""
    document.getElementById("updated").innerHTML = ""
    document.getElementById("tweetCreated").innerHTML = ""
    document.getElementById("tweet").innerHTML = ""

    //Sends a new request to server
    const xhr = new XMLHttpRequest();
   
    //Initializes new GET request for parsedTweets route
    xhr.open('GET','http://127.0.0.1:3000/parsedTweets');

    //Once successful request is received, onload will run
    xhr.onload = () => {

        //Parses the read favs.json file sent from parsedTweets
        const tweetData = JSON.parse(xhr.response);

        //Creates the header for the popup that will show all the tweets
        document.getElementById("showHeader").innerHTML ="Tweets (time created: text):"

        //Iterates through the JSON object array and prints out the time and text of each tweet
        for (tweet in tweetData){
            document.getElementById("showTweet").innerHTML+= tweetData[tweet].created_at+ ": "
            document.getElementById("showTweet").innerHTML+= tweetData[tweet].text
            document.getElementById("showTweet").innerHTML+= "<br />"
            }
        }
        
    //Sends back nothing since we don't need to use anything
    xhr.send();
}
  
//Function to show all user IDs
function showAllIDs(){

    //Clears all popup text on the screen 
    document.getElementById("showTweet").innerHTML = ""
    document.getElementById("showHeader").innerHTML =""
    document.getElementById("deleted").innerHTML = ""
    document.getElementById("updated").innerHTML = ""
    document.getElementById("tweetCreated").innerHTML = ""
    document.getElementById("tweet").innerHTML = ""

    //Sends a new request to server
    const xhr = new XMLHttpRequest();
      
    //Initializes new GET request for parsedTweets route
    xhr.open('GET','http://127.0.0.1:3000/parsedTweets');

    //Once successful request is received, onload will run
    xhr.onload = () => {

        //Parses the read favs.json file sent from parsedTweets
        const tweetData = JSON.parse(xhr.response);

        //Creates the header for the popup that will show all the user IDs
        document.getElementById("showHeader").innerHTML ="User IDs:"

        for (tweet in tweetData){
            
            //Iterates through the JSON object array and prints out the user ID of each tweet
            document.getElementById("showTweet").innerHTML+= tweetData[tweet].user.id+"<br />"
            }
        }
    //Sends back nothing since we don't need to use anything
    xhr.send();
  }
  
//Function to get the tweet text from Tweet ID
function getTweetDetails(){

    //Clears all popup text on the screen 
    document.getElementById("showTweet").innerHTML = ""
    document.getElementById("showHeader").innerHTML =""
    document.getElementById("deleted").innerHTML = ""
    document.getElementById("updated").innerHTML = ""
    document.getElementById("tweetCreated").innerHTML = ""
    document.getElementById("tweet").innerHTML = ""

    //Gets the Tweet ID from text input
    const tweetId = document.getElementById("tweetDetail").value;

    //Sends a new request to server
    const xhr = new XMLHttpRequest();

    //Initializes new GET request for parsedTweets route
    xhr.open('GET','http://127.0.0.1:3000/parsedTweets');

    //Once successful request is received, onload will run
    xhr.onload = () => {

        //Parses the read favs.json file sent from parsedTweets
        const tweetData = JSON.parse(xhr.response);

            //Iterates through the JSON object array 
            for (tweet in tweetData){

                //Checks if Tweet ID in object array is the same as our Tweet ID input
                if (tweetData[tweet].id == tweetId){

                    //If so, display the text on the webpage
                    document.getElementById("tweet").innerHTML=tweetData[tweet].text
                }
            }
        }
    //Sends back nothing since we don't need to use anything   
    xhr.send();
  }

//Function to update old screen name to new screen name
function updateScreenName(){

    //Clears all popup text on the screen 
    document.getElementById("showTweet").innerHTML = ""
    document.getElementById("showHeader").innerHTML =""
    document.getElementById("deleted").innerHTML = ""
    document.getElementById("updated").innerHTML = ""
    document.getElementById("tweetCreated").innerHTML = ""
    document.getElementById("tweet").innerHTML = ""

    //Gets the old screen name and new screen name from out text input fields
    const oldScreenName = document.getElementById("oldName").value;
    const newScreenName = document.getElementById("newName").value;

    //Sends a new request to server
    const xhr = new XMLHttpRequest();
    
    //Creates a json from our json object with the old screen name
    //and new screen name so that we can send it to server
    var names = JSON.stringify({
        "oldScreenName":oldScreenName,
        "newScreenName":newScreenName
    })

    //Initializes new PUT request for parsedTweets route
    xhr.open('PUT','http://127.0.0.1:3000/parsedTweets');

    //Initalizes request header so that request can only be of 
    //a certain type (json)
    xhr.setRequestHeader('Content-type','application/json');
    
    //Once successful request is received, onload will run
    xhr.onload = () => {

        //Outputs to webpage that screen name was updated
        document.getElementById("updated").innerHTML = "Screen Name Updated!"
    
    }
    
    //Send json of our old and new screen names to server
    xhr.send(names);
  }

//Function to create a tweet given Tweet ID and tweet text inputs
function createTweet(){

    //Clears all popup text on the screen 
    document.getElementById("showTweet").innerHTML = ""
    document.getElementById("showHeader").innerHTML =""
    document.getElementById("deleted").innerHTML = ""
    document.getElementById("updated").innerHTML = ""
    document.getElementById("tweetCreated").innerHTML = ""
    document.getElementById("tweet").innerHTML = ""

    //Gets the Tweet ID and tweet text that we want to create our
    //new tweet with
    const tweetID = document.getElementById("tweetID").value;
    const tweetText = document.getElementById("tweetText").value;

    //Sends a new request to server
    const xhr = new XMLHttpRequest();
    
    //Create a json from our json object with our desired tweet ID and tweet text
    var tweet =JSON.stringify(
    {
        "id": tweetID,
        "text": tweetText

    });
        
    //Initializes new POST request for parsedTweets route
    xhr.open('POST', 'http://127.0.0.1:3000/parsedTweets');

    //Initalizes request header so that request can only be of 
    //a certain type (json)
    xhr.setRequestHeader('Content-type','application/json');
    
    //Once successful request is received, onload will run
    xhr.onload = () => {
        
        //Outputs to webpage that tweet was created
        document.getElementById("tweetCreated").innerHTML = "Tweet Created!"
        }

        //Send json of our tweet ID and text to server
        xhr.send(tweet); 
    }

//Function to delete a tweet given the tweet ID
function deleteTweet(){

    //Clears all popup text on the screen 
    document.getElementById("showTweet").innerHTML = ""
    document.getElementById("showHeader").innerHTML =""
    document.getElementById("deleted").innerHTML = ""
    document.getElementById("updated").innerHTML = ""
    document.getElementById("tweetCreated").innerHTML = ""
    document.getElementById("tweet").innerHTML = ""

    //Gets the tweet ID of the tweet we wish to delete
    const id= document.getElementById("deleteID").value;

    //Sends a new request to server
    const xhr = new XMLHttpRequest();

    //Create a json from our json object with our desired tweet ID to delete
    var idToDelete = JSON.stringify({
        "id": id
    })
        
    //Initializes new DELETE request for parsedTweets route
    xhr.open('DELETE', 'http://127.0.0.1:3000/parsedTweets');

    //Initalizes request header so that request can only be of 
    //a certain type (json)
    xhr.setRequestHeader('Content-type','application/json',);

    //Once successful request is received, onload will run
    xhr.onload = ()=> {
          
        //Outputs to webpage that tweet was deleted
        document.getElementById("deleted").innerHTML = "Tweet Deleted!"
    }
      
    //Send json of our desired deleted tweet ID
    xhr.send(idToDelete);
  }


