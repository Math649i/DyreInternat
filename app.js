const express = require('express');
const mongoose = require('mongoose');
require ('dotenv').config();
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const animalRoutes = require('./routes/animalRoutes');

const app = express();

// Multer opsætning til at gemme billeder i 'uploads/' mappen
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));  // Sørger for unikt filnavn
    }
});

const upload = multer({ storage: storage });

app.use(express.static('public'));

app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));  // Gør uploads folderen offentligt tilgængelig


app.use('/animals', animalRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


mongoose.connect(process.env.MONGODB_URI, { })
    .then(() => console.log('Forbundet til MongoDB'))
    .catch(error => console.error('Kunne ikke forbinde til MongoDB:', error));


// Start serveren på den ønskede port
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Serveren kører på port ${PORT}`);
});