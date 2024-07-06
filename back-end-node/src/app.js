const express = require('express');
const app = express();
const login = require('./routes/index')
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => { 
    res.send('A simple Node App is '
        + 'running on this server') 
    res.end() 
}) 

app.use('/api', login);
 
const PORT = process.env.PORT ||3008;
 
app.listen(PORT,console.log(`Server started on port ${PORT}`));