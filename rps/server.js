const express = require('express')
const app = express() // initialize app
const port = 3000
let counter = 0;
// GET callback function returns a response messageno
app.get('/', (req, res) => {
    res.send('Hello World! Welcome to Node.js')
})

//Get function  that returns the number of visist for node sessions
app.get('/visits', (req, res) => { //at the '/visits' route
	counter += 1 //increase our counter variable by 1
      // Text formatting from ‘text formatting’ JavaScript prelab section
	res.send(`There have been ${counter} visits to this session`);
});

//each route is the option  user selcets, bot will choose at random (1 rock, 2 paper, 3 scissors)

//if user picks rock
app.get('/rock', (req, res) => {

});

//if user picks paper   
app.get('/paper', (req, res) => {
    const rndInt = Math.floor(Math.random() * 3) + 1 //generates random number from 0-1 and multiplies it by 3 and adds 1 then floors value (gets rid of decimal)
    console.log(rndInt) //prints out choice of the bot  
    if (rndInt === 3){
        res.send("Bot picked Scissors. You Win!!!");  
    }else if (rndInt === 1){
        res.send("Bot picked Rock. Tie! Try again!")
    }
});

//if user picks scissors
app.get('/scissors', (req, res) => {

    });



app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})








