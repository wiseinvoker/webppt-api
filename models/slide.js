// backend/models/slide.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'slides.db',
});

// Define the Slide model
const Slide = sequelize.define('Slide', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  layout: {
    type: DataTypes.STRING,
    defaultValue: 'default', // Can be 'default', 'image', etc.
  },
});

// Ensure that the model is synced with the database
const syncDatabase = async () => {
  try {
    await sequelize.sync();
    console.log("Database synced successfully!");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
};

// Export the model and sequelize instance
module.exports = { Slide, sequelize, syncDatabase };
