const router = require('express').Router();

const Users = require('./users-model');
const restricted = require('../auth/restricted-middleware.js');

// For endpoints beginning with /api/users

router.get('/', restricted, (req, res) => {
    Users.find()
        .then(users => {
            res.json({ loggedInUser: req.username, users });
        })
        .catch(err => res.send(err));
});

module.exports = router;