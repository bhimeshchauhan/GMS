var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);
var mainModule = {
    testRoute : function(){
        var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=NeKcfPijq0J4r3I7T5AV2j65DWdZOjro&limit=5");
        xhr.done(function(data) { console.log("success got data", data); });
        return "this is hi from the main.js from giphy_api";
    }
};

module.exports = mainModule;