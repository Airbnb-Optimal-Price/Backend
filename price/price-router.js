const router = require('express').Router();

const restricted = require('../auth/restricted-middleware');
const Location = require('../price/price-model');

// For endpoints beginning with /api/price

router.post('/', restricted, (req, res) => {
    let { nights, guests, location } = req.body;

    Location
        .findBy({ location })
        .then(() => {
            if (nights && guests && location) {
                res.status(200).json({ price: 80 });
            } else {
                res.status(401).json({ message: "Missing information" })
            }
        })
        .catch(err => {
            res.status(500).json({ message: "There has been an error", err })
        }
        );
});

module.exports = router;