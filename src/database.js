//Conexion de la Base de datos
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://edu:ifPhlh8p7yh6JYfY@report-e0zss.mongodb.net/test?retryWrites=true&w=majority',
{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})

.then(db => console.log('Db Conexion exitosa'))
.catch( err=> console.error(err));
