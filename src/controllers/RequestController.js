const db_connection = require('./../db_connection');
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var routes = require('./../routes')
var session = require('express-session');
const multer = require('multer');
const upload = multer({ dest: '' });
var formidable = require('formidable');
const convert = require('xml-js')


var fs = require('fs')
        

module.exports = {
    async list(req, res, next) {
      const list1 = await db_connection.select().from('users')
      res.json(list1)
    },

    async readxml(req, res, next) {

        

        
        if(req.file){
            const file = req.file['filename']
            fs.readFile('./uploads/'+file,'utf8', function(err,data){
                var result = convert.xml2js(data, { compact: true });
                //console.log(result['NFe']['infNFe']['ide']['nNF']['_text'])
                res.json(result)
            });
    
            //fs.unlink("./uploads/"+file)
    
            fs.unlink("./uploads/"+file, function (err) {            
                if (err) {                                                 
                    console.error(err);                                    
                }                                                          
               //console.log('File has been Deleted');                           
            });
            
        }else{
            res.json('error')
            
        }
        

        
    }
    
}