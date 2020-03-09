const router = require('express').Router();
const Url = require('../models/url');

router.route('/')
.get((req,res) => {
    res.redirect('https://github.com/pawankumargali/urlShortener/blob/master/README.md');
});


module.exports = router;