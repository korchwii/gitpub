const express= require('express')
const drinks= require('./models/drinks')
const foods= require('./models/foods')
const app= express()
const port= 3000
app.listen (port,()=>{
    console.log ('server is running')
})

// request is the info that the user gives to thew API and response is what API gives to the user
app.get ('/',(req,res)=>{
    res.send('Welcome to the Gitpub App!');
})

app.get ('/drinks',(req,res)=>{
    res.render('drinks_index.ejs',{drinks});
})

app.get ('/drinks/:id',(req,res)=>{
res.render('drinks_show.ejs',{drink:drinks[req.params.id]})
})
app.get ('/foods',(req,res)=>{
    console.log(foods)
    res.render('food_index.ejs',{foods});
})

app.get ('/foods/:id',(req,res)=>{
res.render('food_show.ejs',{food:foods[req.params.id]})
})