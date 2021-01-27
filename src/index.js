const express = require('express');
const morgan = require('morgan');
const mogoose = require('mongoose');

const app = express();

mogoose.connect(
    "mongodb+srv://bizsys_totem:j56tZpGLCjozDxvH@mongo-bizsys.av1f6.mongodb.net/Amazon_teste",
    {
        useNewUrlParser:true,
        useUnifiedTopology: true
    }
)

// Express conseguirá lidar com as requisições com o corpo de mensagem vindo com o formato de json.
app.use(express.json());
// Dizemos como o express deverá lidar com requisições em url encoded
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(require('./routes'));

app.listen(8000, () => {
    console.log('Server running! 🚀')
});