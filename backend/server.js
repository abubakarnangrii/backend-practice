const { error } = require('console');
const express = require('express');
const app = express();

// Configure the ejs
app.set("view engine","ejs");

// Configure the Static files like images , stylesheets , javascript files
app.use(express.static('./public'));


// Using ejs to run the html like data in the swerver and we sent some dynamic data from server to these files
app.get('/',(req,res)=>{
    res.render("index",{email:"abubakarnangri@gmail.com",password:"abubakar1234"});
});

app.get('/about', (req, res)=> {
    res.render("about");
});


// Error Handling
app.get('/error', function (req, res,next) {
    throw new Error("Please Login first to ddo something in this website");
});

app.use( function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
})

// middleware
// app.use(function(req,res,next){
//     console.log("hello")
//     next();
// })

app.get('/:username', function (req, res) {
    res.send(`hello from ${req.params.username}`);
});

app.listen(3000);