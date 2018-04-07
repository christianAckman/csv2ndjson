/*
    Converts CSV to ND-JSON format
*/

var csv = require('csvtojson')
var fs = require('fs')
var path = require('path')

// Elasticsearch
function csv2bulk(_csv, _json, _index, _type){

    csv()
    .fromFile(_csv)
    .on('json', (json) =>{

        var action = '{ "index" : { "_index" : "' + _index + '", "_type" : "' + _type + '" } }'

        fs.appendFile(_json, action + '\n' + JSON.stringify(json) + '\n', function (err) {
            if (err) {
                throw err;
            }
        })
    })
    .on('done', (err) =>{
        if(err){
            throw err;
        }
        else{
            return {
                error: false,
                message: 'Successfully created: ' + _json
            }
        }
    })
}

function csv2ndjson(_csv, _json){

    csv()
    .fromFile(_csv)
    .on('json', (json) =>{

        fs.appendFile(_json, '\n' + JSON.stringify(json) + '\n', function (err) {
            if (err) {
                throw err;
            }
        })
    })
    .on('done', (err) =>{
        
        if(err){
            throw err;
        }
        else{
            return {
                error: false,
                message: 'Successfully created: ' + _json
            }
        }
    })
}

module.exports = {
    csv2bulk: csv2bulk,
    csv2ndjson: csv2ndjson
};