const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const $ = jQuery = require('jquery')(window);
module.exports = {
    giphy: (string)=>{
        let thisurl = "";
        var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+string+"&api_key=NeKcfPijq0J4r3I7T5AV2j65DWdZOjro&limit=5");
        xhr.done(function(data) {
            console.log("success got data", string, data.data[0].embed_url);
            thisurl = data.data[0].embed_url;
        });
        return thisurl;
    }
};