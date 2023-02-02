'use strict';

var passport = require('passport');
var LocalStrategy = require('passport-local');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var usersModel = require('../../model/users');

module.exports = function(app) {

    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        },

        function(email, password, done) {

            usersModel.findByEmail(email, function(err, result) {
                if (err) {
                    console.log(new Error("DB Error :: " + err));
                    done(null, false, { message: 'DB Error' });
                }

                if (!result || !result.length) {

                    console.log('email not found..')
                    done(null, false, { message: 'Invalid Email' });

                } else {

                	result = result[0];

                    bcrypt.compare(password, result.password, function(err, authorised) {
                        
                        if (authorised) {
                            console.log('Login Success.. ' + email);
                            var user = {
                                id: result._id,
                                email: result.email,
                                role: result.role,
                                name: result.name
                            }
                            done(null, user);

                        } else {

                            console.log('Wrong Password');
                            done(null, false, { message: 'Invalid Password' });
                        }                        
                    });
                }
            });
        })
    );
};