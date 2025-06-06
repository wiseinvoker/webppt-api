// backend/server.js
const express = require("express");
// const { Slide } = require("./models/slide");
const { Slide, sequelize, syncDatabase } = require('./models/slide');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// Sync the database (Make sure to call it once, before starting the server)
syncDatabase();

// CRUD routes for slides
app.post("/api/slides", async (req, res) => {
  try {
    const { title, content, layout } = req.body;
    const newSlide = await Slide.create({ title, content, layout });
    res.status(201).json(newSlide);
  } catch (error) {
    console.log("Error saving:", error);
    res.status(400).json({ error: "Error saving slide." });
  }
});

app.get("/api/slides", async (req, res) => {
  try {
    const slides = await Slide.findAll();
    res.json(slides);
  } catch (error) {
    res.status(400).json({ error: "Error fetching slides." });
  }
});

app.get("/api/slides/:id", async (req, res) => {
  try {
    const slide = await Slide.findByPk(req.params.id);
    if (slide) {
      res.json(slide);
    } else {
      res.status(404).json({ error: "Slide not found." });
    }
  } catch (error) {
    res.status(400).json({ error: "Error fetching slide." });
  }
});

app.put("/api/slides/:id", async (req, res) => {
  try {
    const { title, content, layout } = req.body;
    const slide = await Slide.findByPk(req.params.id);
    if (slide) {
      slide.title = title;
      slide.content = content;
      slide.layout = layout;
      await slide.save();
      res.json(slide);
    } else {
      res.status(404).json({ error: "Slide not found." });
    }
  } catch (error) {
    res.status(400).json({ error: "Error updating slide." });
  }
});

app.delete("/api/slides/:id", async (req, res) => {
  try {
    const slide = await Slide.findByPk(req.params.id);
    if (slide) {
      await slide.destroy();
      res.status(200).json({ message: "Slide deleted." });
    } else {
      res.status(404).json({ error: "Slide not found." });
    }
  } catch (error) {
    res.status(400).json({ error: "Error deleting slide." });
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
