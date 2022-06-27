const express=require("express")
const app=express()
const users=require("./user.json")
// console.log(app);
app.get("/",function(request,response){
    response.send("Welcome to express API")
})
app.get("/user",function(request,response){
    response.send("Here is user data")
})
app.get("/employee",function(request,response){
    response.json(users)
})

const PORT=3001
app.listen(PORT,function(){
    console.log(`server is listening at ${PORT}`)
})