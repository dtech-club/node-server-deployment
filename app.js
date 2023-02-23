import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';

// Load env vars into process.env object
dotenv.config();

console.log(process.env)



const app = express();
const PORT = process.env.PORT || 4000;

app.get("/weather", async (req, res) => {
    // Proxy server
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=frankfurt&appid=${process.env.SECRET_KEY}`);

    // Send response to client
    res.send(response.data);
    });


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    });

