const express = require("express")
const cors = require("cors");
const app = express();
const mongoose = require("mongoose")
require('dotenv').config()

const port = process.env.PORT || 5000

// middlewere:-
app.use(cors());
app.use(express.json());

const productRoute = require("./route/productRoute");
const reviewRoute = require("./route/reviewRoute");

app.use('/product',productRoute);
app.use('/reviews',reviewRoute);


mongoose.connect(process.env.url,{})
.then(()=>console.log("connect successfully"))
.catch((err)=>console.log(err));

app.get('',()=>{
    console.log("Hello from Rana");
})
app.listen(port,()=>{
    console.log(`mvc pattern listen ${port}`);
})
