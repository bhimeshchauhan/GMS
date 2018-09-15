const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

const twilioRouter = require('./twillio_api/main');

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/twilio',twilioRouter);

const port = process.env.PORT || 3000;
const listener = app.listen(port, ()=> {
    console.log('Your app is listening on port ' + listener.address().port);
});