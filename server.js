var express = require('express');
var massive = require('massive');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var config = require('./controller/config.js');
var passport = require('passport');

var app = module.exports = express();

// google stradegy //////////////////////////////////////////////////
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// google stradegy ////////////////////////////////////////////////////

var db = massive.connectSync({ db : "vid"});
// the app.set has to go before the controller requiremnt in node
app.set('db', db);

///Controllers///
var controller = require('./controller/mainController.js');

var corsOptions = {
     origin: 'http://localhost:4000'
};

app.use(session({
    secret: config.config.secret,
    saveUninitialized: true,
    resave: true
}));

// google stradegy ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.use(passport.initialize())
app.use(passport.session())

passport.use(new GoogleStrategy({
        clientID: "139619800406-dlhsafsi8nvsp09kirso7aca5eb5ld7k.apps.googleusercontent.com",
        clientSecret: "xhUe0eX4iRfDv6YXRvoEHTig",
        callbackURL: 'http://localhost:4000/auth/google/callback',

    }, function(accessToken, refreshToken, profile, done) {

          // console.log(profile);

          db.find_user([profile.id], function(err, user){

              if (err) return done(err);

              if (!user[0]) {
                db.add_user([profile.id, profile.name.familyName, profile.name.givenName],  function(err, response){
                      if (err) {
                        console.log("*****************", err);
                      }
                      console.log('*********************', response);
                      return done(null, response)
                });
              }
          });
        done(null, profile);
    }));

    passport.serializeUser(function(user, done) {
      // this is putting the user.id into the whole session
      done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
      // add in the database call
        db.find_user([id], function(err, user) {
          // req.session.userid = user[0].userid;

        done(err, user[0]);
      });
    });
// google stradegy ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

// **************** endpoints for the server *******************************************************************
// app.get('/api/users', function(req, res){res.json(users)})
app.get('/auth/google/callback',  passport.authenticate('google', {failureRedirect: '/' }),  function(req, res, next){res.redirect("/#/movie")});
app.get('/api/login/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login']}));
app.get('/api/getNewRelease', controller.getNewRelease );
app.get('/api/getRecentAdded', controller.getrecentAdded );

// ***********************************************************************************

app.listen(4000, function(){
  console.log('server on person project is working on 4000');
});
