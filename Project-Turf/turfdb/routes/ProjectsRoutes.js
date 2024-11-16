const express = require('express');
const router = express.Router();
const Projects = require('../models/ProjectModel');
router.get('/all', async (req, res) => {
    try {
        const fetchProjects = await Projects.find();
        res.status(200).json(fetchProjects);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});
// "title": "2024-11-08T10:30:11.900Z",
//     "desc": "Joanna Mertz",
//     "coverimg": "https://loremflickr.com/640/480/animals",
//     "available": "South",
//     "price": "Kwacha",
//     "id": "1"

router.post('/add', async (req, res) => {
    try {
        const { title, desc, coverimg,available,price} = req.body;
        
        if (!title || !desc) {
            return res.status(400).json({ message: "Title and description are required" });
        }
        
        const newProject = new Projects({ title, desc,coverimg,available,price });
        const saveData = await newProject.save();
        res.status(201).json(saveData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error });
    }
});

router.put('/edits/:id', async (req, res) => {
    try {
        const id = req.params.id;
        
        const current = await Projects.findById(id);
        if (!current) {
            return res.status(404).json({ message: "Project not found" });
        }
        
        const updateData = await Projects.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updateData);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        
        const current = await Projects.findById(id);
        if (!current) {
            return res.status(404).json({ message: "Project not found" });
        }
        
        await Projects.findByIdAndDelete(id);
        res.status(200).json({ message: "Project deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

module.exports = router;
