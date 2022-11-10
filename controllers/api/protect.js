require("dotenv").config();

const express = require("express");
const app = express();
const axios = require("axios");
const apiUrl = "";

console.log("token", process.env.RANDOMER_API_TOKEN);

app.get("/", async (req, res, next) => {
    try{
        if(!process.env.RANDOMER_API_TOKEN){
            throw new Error("You forgot to set RANDOMER_API_TOKEN")
        }
        const result = await axios.get(apiUrl, {
            headers:{
                "X-Api-Key": process.env.RANDOMER_API_TOKEN,
            },
        });
        res.json(result.data);
    }
    catch(err){
        next(err);
    }
});

app.listen(3000, () => {
    console.log("started");
});
