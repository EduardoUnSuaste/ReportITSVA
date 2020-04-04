//Conexion de la Base de datos
const mongoose = require('mongoose');

mongoose.connect('mongodb://u2lo1til284nhldz59me:pE68XUWt4LDCiIVtX9dz@byzor7cjlwwb9ri-mongodb.services.clever-cloud.com:27017/byzor7cjlwwb9ri',
{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})

.then(db => console.log('Db Conexion exitosa'))
.catch( err=> console.error(err));
