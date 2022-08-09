/**
 * @name Last2Leave
 * @version 0.0.1
 * @description A plugin for last to leave challenges
 * @author rac#9359
 *  
 */

const request = require('request');
const fs = require('fs');
const path = require('path');

const config = {
    info: {
        name: "Last2Leave",
        authors: [
            {
                name: "rac#9359"
            }
        ],
        version: "0.0.1",
        description: "A plugin for last to leave challenges"
    },
    defaultConfig: []
}


 module.exports = class Last2Leave{
     
    load() { }
    start() {

//code here

BdApi.alert("Last2Leave", "Thank you for choosing Last2Leave, this plugin is still in development, please report any bugs to the developer.");

//stop coding
}
stop(){

}
}