const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

const $ = jQuery = require('jquery')(window);
let thisurl = "";
const mainModule = {
    testRoute : function(){
        var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=NeKcfPijq0J4r3I7T5AV2j65DWdZOjro&limit=5");
        xhr.done(function(data) {
            console.log("success got data", typeof data, data.data[0].embed_url);
            thisurl = data.data[0].embed_url;
        });
        return thisurl;
    }
};

module.exports = mainModule;