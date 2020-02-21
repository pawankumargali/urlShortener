const router = require('express').Router();
const isValidURL = require('../isValidURL');
const UniqueId = require('../uniqueId');
const Url = require('../models/url');
const checkAuth = require('../checkAuth');

router.route('/')
.post( checkAuth, (req,res) => {

    sendResponse(req,res);
});

module.exports = router;

async function sendResponse(req,res) {
    const {longUrl} = req.body;
    if(isValidURL(longUrl)) {
        try{
            let url = await Url.findOne({longUrl:longUrl});
            let sUrlCode;
            if(!url) {
                sUrlCode = await UniqueId();
                let newUrl = new Url({_id:sUrlCode,longUrl:longUrl});
                await newUrl.save();
            }
            else 
                sUrlCode = url.id;
            sUrl =  process.env.HOST_URL+sUrlCode;
            res.status(200).json(sUrl);
        }
        catch(err) {
            console.log(err);
        }
    }
    else res.status(400).json({msg:'URL Invalid'});
}