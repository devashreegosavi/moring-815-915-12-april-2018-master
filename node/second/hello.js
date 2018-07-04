"use strict";
exports.__esModule = true;
var request = require("request");
request.get('http://codekul.com', function (err, res, bdy) {
    console.log(err);
    console.log(res);
    console.log(bdy);
});
