const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Verbindung zur MongoDB herstellen (ersetze 'mydatabase' ggf. durch Deinen gewünschten Datenbanknamen)
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Mit MongoDB verbunden'))
.catch((err) => console.error('Fehler beim Verbinden mit MongoDB:', err));

// Benutzer-Schema definieren
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
});

// Benutzer-Modell erstellen
const User = mongoose.model('User', userSchema);

// Endpunkt, um alle Benutzer abzurufen
app.get('/users', async (req, res) => {
  try {
    const users = await User.find().select('-password'); // Passwort aus Sicherheitsgründen ausschließen
    res.json(users);
  } catch (error) {
    res.status(500).send('Fehler beim Abrufen der Benutzer');
  }
});

// Endpunkt, um einen neuen Benutzer zu erstellen
app.post('/users', async (req, res) => {
  try {
    // Passwort hashen
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
      name: req.body.name,
      password: hashedPassword,
    });
    
    await user.save();
    res.status(201).send('Benutzer erstellt');
  } catch (error) {
    console.error(error);
    res.status(500).send('Fehler beim Erstellen des Benutzers');
  }
});

// Endpunkt, um sich einzuloggen
app.post('/users/login', async (req, res) => {
  try {
    const user = await User.findOne({ name: req.body.name });
    
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
    console.error(error);
    res.status(500).send('Fehler beim Login');
  }
});

// Server starten
app.listen(5000, () => {
  console.log('Server läuft auf Port 5000');
});
