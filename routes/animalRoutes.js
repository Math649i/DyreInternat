const express = require('express');
const multer = require('multer');
const path = require('path');
const animalController = require('../controllers/animalController');

const router = express.Router();

// Multer opsætning
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');  // Gem billeder i uploads-mappen
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));  // Sørg for unikt filnavn
    }
});

const upload = multer({ storage: storage });

// Ruter
router.get('/', animalController.getAllAnimals);
router.post('/', upload.single('image'), animalController.createAnimal);  // Brug multer til billede-upload
router.put('/:id', upload.single('image'), animalController.updateAnimal);
router.delete('/:id', animalController.deleteAnimal);

module.exports = router;
