const db_connection = require('./../db_connection');
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var routes = require('./../routes')
var session = require('express-session');

/*var app = express();
        app.use(session({
            secret: 'secret',
            resave: true,
            saveUninitialized: true
        }));
        app.use(bodyParser.urlencoded({extended : true}));
        app.use(bodyParser.json());
        app.use(express.static(__dirname + '/'));*/
        

module.exports = {


    async loginAuth(res, response) {
        
        var email = res.body.email;
        var password = res.body.password;
        if (email && password) {
            db_connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {
                if (results.length > 0) {
                    session.email = email
                    response.json([{
                        login: email,
                        status: 'true',
                        msg: 'Usuario logado com sucesso'
                      }]);
                    //response.redirect('/');
                } else {
                    response.json([{
                        status: 'failed',
                        errMsg: 'Incorrect Username and/or Password!'
                      }]);
                }			
                response.end();
            });
        } else {
            response.json([{
                status: 'failed',
                errMsg: 'Please enter Username and Password!'
              }]);
            response.end();
        }
    },

    async logout(res, response) {
        session.email = ''
        response.json("usuario deslogado")

},

    async selectUsers(request, res, next) {

        db_connection.query('SELECT id, email FROM users', function (err, rows, fields){
            
            if (!err)
          res.json(rows)
        else
          res.json([{
            status: 'failed',
            errMsg: 'Error while performing query.'
          }])
        });
    
    //}
},

    async listUsers(req, res, next) {
        db_connection.query('SELECT * FROM users', function (err, rows, fields){
            if(!err)
            res.json(rows)
            else
                res.json([{
                    status:'failed',
                    errMsg: 'Error while perfoming query'
                }])
        });
    },





    async listProducts(req, res, next) {
        
        db_connection.query('SELECT * FROM products', function (err, rows, fields){
            if (!err)
          res.json(rows)
        else
          res.json([{
            status: 'failed',
            errMsg: 'Error while performing query.'
          }])
        });
    
    
},
    
}