const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
//Config
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
//Middlewares

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));


//Routes
app.use(require('./routes/clientes'));

//start
app.listen(app.get('port'), () =>{
    console.log('servidor en el puerto ',app.get('port'));
});


