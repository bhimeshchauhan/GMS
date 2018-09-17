const express = require('express');
const router = express.Router();
const accountSid = process.env.ACCOUNTSID;
const authToken = process.env.AUTHTOKEN;
const client = require('twilio')(accountSid, authToken);
const getGIF = require('../giphy_api/main');

router.post("/sms", (request, response)=> {
    console.log(request.body);
    let toUser = request.body.From;
    let text = request.body.Body;
    let gifURL = getGIF.giphy(text);
    console.log("url is ", gifURL);
    client.messages
        .create({
            body: '',
            from: '+15055877894',
            mediaUrl: gifURL,
            contentType: 'image/gif',
            to: toUser
        })
        .then(message => console.log(message.sid))
        .done();
});


module.exports = router;


