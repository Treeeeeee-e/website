const express = require('express')
const app = express() // initialize app
const port = 3000
let counter = 0;
// GET callback function returns a response message
app.get('/', (req, res) => {
    res.send('Hello World! Welcome to Node.js')
})

//Get function  that returns the number of visist for node sessions
app.get('/visits', (req, res) => { //at the '/visits' route
	counter += 1 //increase our counter variable by 1
      // Text formatting from ‘text formatting’ JavaScript prelab section
	res.send(`There have been ${counter} visits to this session`);
});


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})






