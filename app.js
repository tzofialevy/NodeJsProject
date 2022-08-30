// var createError = require('http-errors');
const myexpress = require('express');
const path = require('path');
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const env=require("dotenv");
env.config();
const app = myexpress();
const adminRouter = require('./middleWare/adminRouter')
const categoryRouter = require('./middleWare/categoryRouter')
const userRouter = require('./middleWare/userRouter')

mongoose.connect(
 process.env.CONNECTIONSTRING,
 {
        useNewUrlParser:true,
        useUnifiedTopology:true
  }
).then(()=>{console.log("the DB connecting")})


app.use(bodyParser.json());

app.use("/admin",adminRouter);
app.use("/category",categoryRouter);
app.use("/user",userRouter);
app.listen(process.env.PORT,()=>{console.log("listen in port",process.env.PORT)});
module.exports = app;
