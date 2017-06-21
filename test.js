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

// var usersInfo={};
//     name:usersInfo.name;



application.post('/', (request, response) => {
    console.log(request.body);
    response.render('login-success', request.body);
});

application.listen(3000);