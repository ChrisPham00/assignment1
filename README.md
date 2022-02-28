# Assignment 1

## Files

### parsedTweets.js

This will read the data from our json file that will be our database for our tweets in the assignment.  It will also handle all the GET,POST,DELETE, and UPDATE requests from the client.

### main.js

This will get the data and events from the client side such as a button being clicked or the text input on the webpage.  It will
also be responsible for sending important information for each request to the server.

### server.js

This will specify and create the server on which our webpage will be run.

### app.js

This will where we will specify which routes and the html we will use.

### index.html

This will be the html file in which the webpage appearance is based on.  It also holds the eventhandlers for when an interactive element on the webpage is interacted with.

## How to use (client side)

### Get Tweets button

Upon pressing this button, all the tweets in our database (favs.json) will be displayed at the bottom of the screen with the time it was created as well as the text of the tweet.  Each row will indicate a new tweet.

### Get all user IDs button

Upon pressing this button, all the user IDs in our database (favs.json) will be displayed at the bottom of the screen.  Each row will indicate a new tweet.

### Get Tweet Details

In this section, the user will put the tweet ID of the tweet that they wish to view in the text input field on the left.  Then, upon pressing the "Get Tweet" button, the tweet text will be displayed below the text input field.

### Create Tweet

In this section, the user will input their desired tweet ID and text of a new tweet into the text input fields as indicated on the webpage.  Upon pressing the "Create Tweet" button, the tweet will be created and saved to the database (favs.json) with the specified tweet ID and text.  The webpage will then display text below the button to let the user know their tweet has been created.

### Update Screen Name

In this section, the user will input the screen name that they wish to have updated as well as the desired updated name into the two text input fields.  Upon pressing the "Update Screen Name" button, the screen name of the specified user will be updated and saved to the database (favs.json). The webpage will then display text below the button to let the user know their screen name has been updated.

### Delete Tweet

In this section, the user will input the tweet ID of the tweet they wish to delete into the text input field.  Upon pressing the "Delete Tweet" button, the tweet with the specified tweet ID will be removed from our database (favs.json).  The webpage will then display text below the button to let the user know the tweet has been deleted

## Run

This code will be run on http://127.0.0.1:3000/ through the server.js file (node server.js)
















