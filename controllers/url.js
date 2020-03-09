const Url = require('../models/url');
const isValidURL = require('../helpers/isValidURL');
const UniqueId  = require('../helpers/uniqueId');

module.exports.getShortUrl = (req,res) => {
    const {sUrlCode} = req.params;
    Url.findOne({_id:sUrlCode})
        .then(url => {
            if(!url) res.status(404).json({msg:'No shrot URL exists for the link'});
            else res.redirect(url.longUrl);
        })
        .catch(err => console.error(err)); 
}

module.exports.shortenUrl = async (req,res) => {
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