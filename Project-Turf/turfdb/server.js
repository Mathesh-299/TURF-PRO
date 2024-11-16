require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const DBCon = require("./Config/db"); 
const router = require('./routes/ProjectsRoutes');

app.use(express.json());
app.use(cors());

app.use('/projects', router);

app.get('/', (req, res) => {
    res.json({ message: "Welcome to the root route!" });
});

const port = 7777 || 7778;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
