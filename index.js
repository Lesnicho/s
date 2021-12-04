let express = require('express');
let app = express();

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
let users = [];
app.use(express.static('static'));
    app.get('/');
    app.post('/register', (req, res) => {
        users.push(req.body)
        console.log(users)
    })
app.listen(8080);