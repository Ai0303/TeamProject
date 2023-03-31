let express = require("express");
let app = express();

let port = 3000;

app.set("view engine",  'ejs');

//login画面
app.get("/login", (req,res) =>{
    res.render('login-screen');
})
//chat画面
app.get("/chat", (req, res) =>{
    res.render('Chat-Screen');
})
app.listen(port,() => {
    console.log("Start Server!");
})