const express = require('express');
const bcrypt = require('bcrypt');
const { Sequelize, DataTypes } = require('sequelize');

// Express und Sequelize einrichten
const app = express();
app.use(express.json());

// SQLite-Datenbank verbinden
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
});

// Benutzer-Modell erstellen
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

// Synchronisiere das Modell mit der Datenbank
sequelize.sync();

app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).send('Fehler beim Abrufen der Benutzer');
  }
});

app.post('/users', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = await User.create({
      name: req.body.name,
      password: hashedPassword,
    });
    
    res.status(201).send('Benutzer erstellt');
  } catch (error) {
    res.status(500).send('Fehler beim Erstellen des Benutzers');
  }
});

app.post('/users/login', async (req, res) => {
  try {
    const user = await User.findOne({ where: { name: req.body.name } });

    if (!user) {
      return res.status(400).send('Benutzer nicht gefunden');
    }

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

    if (isPasswordValid) {
      res.status(200).send('Erfolgreich eingeloggt');
    } else {
      res.status(400).send('Ungültiges Passwort');
    }
  } catch (error) {
    res.status(500).send('Fehler beim Login');
  }
});

app.listen(5000, () => {
  console.log('Server läuft auf Port 5000');
});