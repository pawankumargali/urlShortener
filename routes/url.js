const router = require('express').Router();
const { getShortUrl, shortenUrl } = require('../controllers/url');
const { isAuth } = require('../controllers/auth');

router.get('/:sUrlCode', getShortUrl);
router.post('/url/shorten', isAuth, shortenUrl );

module.exports = router;