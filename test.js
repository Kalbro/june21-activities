const express = require('express');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');

const application = express();
application.engine('mustache', mustache());

application.set('views', './views');
application.set('view engine', 'mustache');

application.use(bodyParser.urlencoded());

application.get('/', (request, response) => {
    response.render('login');

});

// var users={};
// var userName = request.body.name;
// var userEmail = request.body.email;
// var userBirthday = request.body.birthday;


application.post('/', (request, response) => {
    response.render('login-success');
});

application.listen(3000);