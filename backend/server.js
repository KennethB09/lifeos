const express = require('express');
const cors = require('cors');

const app = express();
const router = express.Router();
const PORT = 3000;

app.use(cors());
app.use(express.json());

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
        default:
            response.mode = "Focus";
            response.musicEmbed = "";
    }

   await res.json(response);
    
    
   // res.status(500).json({ error: 'Internal server error' });
    
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});