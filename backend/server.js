const express = require('express');
const cors = require('cors');
require('dotenv').config();
// import OpenAI from "openai";
const app = express();
const router = express.Router();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const axios = require('axios');
// Middleware to handle JSON requests

app.post('/api/mood', async (req, res) => {
    if (!req.body) {
    return res.status(400).json({ error: 'Request body is required' });
    }
    
    const mood = req.body.mode;
    console.log("Received mood:", mood);

    if (!mood) {
        return res.status(400).json({ error: 'Mood is required' });
    }

    let response = {
        mode: "Focus",
        musicEmbed: "",
    };

    switch (mood.toLowerCase()) {
        case 'stressed':
            response.mode = "Chill";
            response.musicEmbed = "https://www.youtube.com/embed/jfKfPfyJRdk?si=TBZe4VEVyiqO_Cq8";
            break;
        case 'sad':
            response.mode = "Chill";
            response.musicEmbed = "https://www.youtube.com/embed/5yx6BWlEVcY";
            break;
        case 'happy':
            response.mode = "Focus";
            break;
        case 'angry':
            response.mode = "Chill";
            response.musicEmbed = "https://www.youtube.com/embed/2Vv-BfVoq4g";
            break;
        case 'meh':
            response.mode = "Focus";
            response.musicEmbed = "https://www.youtube.com/embed/9bZkp7q19f0";
            break;
        default:
            response.mode = "Focus";
            response.musicEmbed = "";
    }

   res.json(response);
    
});

app.post("/api/focus-advice", async (req, res) => {

     if (!req.body) {
    return res.status(400).json({ error: 'Request body is required' });
    }
    
    const message = req.body.content;
    console.log("Received message:", message);

    try {
        const response = await axios.post(process.env.OPEN_ROUTER_API_URL,
            {
                model: "deepseek/deepseek-chat:free",
                messages: [
                    {
                        role: "user",
                        content: message
                    }
                ],
                max_tokens: 100,
                temperature: 0.7
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPEN_ROUTER_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        if (!response.data || !response.data.choices || response.data.choices.length === 0) {
            return res.status(500).json({ error: 'No advice received from the API' });
        }
        const tip = response.data.choices[0].message.content.trim();
        res.json({ tip });
    
    } catch (error) {
        console.error('Error fetching advice:', error);
        res.status(500).json({ error: 'Failed to fetch advice' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});