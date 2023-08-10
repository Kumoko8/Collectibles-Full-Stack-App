// Import required modules
const express = require('express');
const router = express.Router();
const { User } = require('../../models'); // Import the User model
const bcrypt = require('bcrypt'); // For password hashing

// Define routes and actions
router.get('/profile/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findByPk(userId);

        // Render user profile using a Handlebars template
        res.render('profile', { user });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving user profile');
    }
});

router.get('/login', (req, res) => {
    // Render login page
    res.render('login');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (user && bcrypt.compareSync(password, user.password)) {
            // Set user session and redirect to dashboard
            req.session.user = user;
            res.redirect('/dashboard');
        } else {
            res.redirect('/login');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error logging in');
    }
});

router.get('/register', (req, res) => {
    // Render registration page
    res.render('register');
});

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = await User.create({ username, email, password: hashedPassword });

        // Set user session and redirect to dashboard
        req.session.user = newUser;
        res.redirect('/dashboard');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error registering user');
    }
});

module.exports = router;