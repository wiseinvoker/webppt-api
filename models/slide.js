// backend/models/slide.js
const { Sequelize, DataTypes } = require('sequelize');
const fs = require('fs');
require('dotenv').config();

// Connect to Supabase PostgreSQL
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
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
    defaultValue: 'default',
  },
});

// Ensure that the model is synced with the database
const syncDatabase = async () => {
  sequelize.authenticate()
  .then(() => console.log('✅ Connected to Supabase!'))
  .catch(err => console.error('❌ Failed to connect:', err));
};

// Export the model and sequelize instance
module.exports = { Slide, sequelize, syncDatabase };
