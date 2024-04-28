// index.js
const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle incrementing count
app.get('/hm', (req, res) => {
    fs.readFile('count.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error reading count.json');
        }
        const count = JSON.parse(data);
        count.value++;
        fs.writeFile('count.json', JSON.stringify(count), err => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error writing to count.json');
            }
            res.sendFile(__dirname + 'count.html');
        });
    });
});

// Route to serve count.json
app.get('/count', (req, res) => {
    fs.readFile('count.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error reading count.json');
        }
        res.json(JSON.parse(data));
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});