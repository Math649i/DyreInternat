const Animal = require('../models/Animal');

// Hent alle dyr
exports.getAllAnimals = async (req, res) => {
    try {
        const animals = await Animal.find();
        res.json(animals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Opret et nyt dyr med billede
exports.createAnimal = async (req, res) => {
    try {
        const animalData = {
            name: req.body.name,
            species: req.body.species,
            age: req.body.age,
            description: req.body.description,
            // Her skal vi sikre, at vi gemmer stien korrekt
            image: req.file ? '/uploads/' + req.file.filename : undefined // Hvis der er et billede, gem URL'en i databasen
        };

        const animal = new Animal(animalData);
        await animal.save();
        res.status(201).json(animal); // Returnerer dyret med billede (hvis tilføjet)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Opdater et dyr
exports.updateAnimal = async (req, res) => {
    try {
        const animal = await Animal.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(animal);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Slet et dyr
exports.deleteAnimal = async (req, res) => {
    try {
        await Animal.findByIdAndDelete(req.params.id);
        res.json({ message: 'Dyret er slettet' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
