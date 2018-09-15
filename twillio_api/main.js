const express = require('express');
const router = express.Router();
const accountSid = 'ACd7e8899a64658c8e7bb9a4974fce1484';
const authToken = '04184a719c52a0bccba4ba217034c714';
const client = require('twilio')(accountSid, authToken);
const getGIF = require('../giphy_api/main');

router.post("/sms", (request, response)=> {
    console.log(request.body);
    let toUser = request.body.From;
    let text = request.body.Body;
    let gifURL = getGIF.giphy(text);
    client.messages
        .create({
            body: '',
            from: '+15055877894',
            mediaUrl: gifURL,
            to: toUser
        })
        .then(message => console.log(message.sid))
        .done();
});


module.exports = router;


