const router = require('express').Router();

router.route('/')
.get((req,res) => {
    res.render('index');
});


const Url = require('../models/url');

router.route('/')
.get((req,res) => {
    const {sUrlCode} = req.params;
    Url.findOne({_id:sUrlCode})
        .then(url => {
            if(!url) res.status(404).json({msg:'No shrot URL exists for the link'});
            else res.redirect(url.longUrl);
        })
        .catch(err => console.error(err)); 
});


module.exports = router;