const express = require('express');
const router = express.Router();
const connection = require('./connection');

// Get all students (for example purposes)
router.get('/get', (req, res) => {
    var query = "SELECT * FROM register";
    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json(results);
        }
        else {
            return res.status(500).json(err);
        }
    });
});

// Delete a student by name
router.delete('/register/:name', (req, res) => {
    const studentId = req.params.name;
    var query = "DELETE FROM register WHERE name = ?";
    connection.query(query, [studentId], (err, result) => {
        if (err) {
            console.error('Error deleting data: ', err);
            return res.status(500).send('Error deleting data', err);
        }
        console.log('Data deleted successfully');
        res.status(200).send('Data deleted successfully');
    });
});

// Update a student by name
router.patch('/update', (req, res) => {
    let user = req.body;
    var query = "UPDATE register SET age = ? WHERE name = ?";
    connection.query(query, [user.age, user.name], (err, results) => {
        if (!err) {
            if (results.affectedRows == 0) {
                return res.status(404).json({ message: "User name not found" });
            }
            return res.status(200).json({ message: "User updated successfully" });
        } else {
            return res.status(500).json({ error: err.message });
        }
    });
});

// Insert a new student
router.post('/use', (req, res) => {
    const use = req.body;
    var query = "INSERT INTO register (name, age) VALUES (?, ?)";
    connection.query(query, [use.name, use.age], (err) => {
        if (err) {
            console.error('Error inserting data: ', err);
            return res.status(500).send('Error inserting data', err);
        } else {
            console.log('Data inserted successfully');
            res.status(200).send('Data inserted successfully');
        }
    });
});

// Register a new user
router.post('/register', (req, res) => {
    const { username, password, email } = req.body;
    const query = "INSERT INTO registration (username, password, email) VALUES (?, ?, ?)";
    connection.query(query, [username, password, email], (err) => {
      if (err) {
        console.error('Error registering user: ', err);
        return res.status(500).send('Error registering user');
      } else {
        console.log('User registered successfully');
        return res.status(200).send('User registered successfully');
      }
    });
  })

module.exports = router;
