const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/elseprec_sistema', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});


require('./roles.model');
require('./proyecto.model');

require('./empresas.model');
require('./horarios.model');

require('./sedes.model');
require('./usuarios.model');