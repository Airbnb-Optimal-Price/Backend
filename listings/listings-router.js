const router = require('express').Router();
const Listings = require('./listings-model');
const restricted = require('../auth/restricted-middleware');

// For endpoints beginning with /api/listings

// Gets all listings
router.get('/', restricted, (req, res) => {
    Listings
        .find()
        .then(listings => res.status(200).send(listings))
        .catch(error => res.status(500).json({ Error: 'Error getting listings.' }));
});

// Gets listing by ID
router.get('/:id', restricted, (req, res) => {
    let id = req.params.id;

    Listings.findById(id)
        .then(listings => res.status(200).json({ listings }))
        .catch(err => res.status(500).send(err));
});


// Adds listing
router.post('/', restricted, (req, res) => {
    const listing = req.body;

    Listings
        .add(listing)
        .then(listings => res.status(201).json(listings))
        .catch(error => res.status(500).json({ Error: 'Could not add listing.' }));
});

// Updates listing
router.put('/:id', restricted, (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    Listings
        .update(id, changes)
        .then(listings => res.status(201).json(listings))
        .catch(error => res.status(500).json({ Error: 'Could not update listing.' }));
});

// Deletes listing
router.delete('/:id', restricted, (req, res) => {
    let id = req.params.id;

    Listings
        .findById(id)
        .del()
        .then(users => res.status(200).json({ message: "Listing deleted successfully." }))
        .catch(err => res.status(500).send(err));
});

module.exports = router;