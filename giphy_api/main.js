const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const $ = jQuery = require('jquery')(window);
let thisurl = "";
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
module.exports = {
    giphy: (string) => {

        const url = "http://api.giphy.com/v1/gifs/search?q=" + string + "&api_key=NeKcfPijq0J4r3I7T5AV2j65DWdZOjro&limit=20";
        var xhr = new XMLHttpRequest();

        xhr.onload = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                var data = response.data;
                const i = Math.floor((Math.random()*20) + 1);
                console.log("DATA => ", data[i].images.downsized_small.mp4);
                thisurl = data[i].images.downsized_small.mp4;
            }
        };
        xhr.open('GET', url, false);
        xhr.send();
        return thisurl;
    }
};