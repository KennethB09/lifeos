const express = require('express');
const cors = require('cors');

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
    
    const { mood } = req.body;
    // Validate mood input

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
            response.musicEmbed = "https://www.youtube.com/embed/hHW1oY26kxQ";
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

   await res.json(response);
    
    
   // res.status(500).json({ error: 'Internal server error' });
    
});

app.get("/api/focus-advice", async (req, res) => {
    try {
        const response = await axios.post('https://api.deepseek.com/v1/chat/completions',
            {
                model: "deepseek-chat",
                messages: [
                    {
                        role: "user",
                        content: "Give me a short productivity tip for staying focused."
                    }
                ],
                max_tokens: 100,
                temperature: 0.7
            },
            {
                headers: {
                    Authorization: `Bearer sk-7e3a6813b0604f71a7e28d91f4a83213`, // Replace with your actual API key
                    'Content-Type': 'application/json'
                }
            }
        );

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