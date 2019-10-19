const router = require('express').Router();

const Users = require('./users-model');
const restricted = require('../auth/restricted-middleware');

// For endpoints beginning with /api/users

router.get('/', restricted, (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json({ users });
        })
        .catch(err => res.status(500).send(err));
});

router.delete('/:id', restricted, (req, res) => {
    let id = req.params.id;

    Users.findById(id)
        .then(users => {
            res.status(200).json({ message: "User deleted successfully." });
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

module.exports = router;