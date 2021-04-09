const mongoose = require('mongoose');



/*
mongodb://localhost:27017/multiempresas
mongodb://admin:Lh68i2XFGO0RlNbT@SG-multiempresas-42954.servers.mongodirector.com:27017/admin
*/

mongoose.connect('mongodb://admin:Lh68i2XFGO0RlNbT@SG-multiempresas-42954.servers.mongodirector.com:27017/admin', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});
*/

require('./consultorio.model');
require('./cupones.model');
require('./empresas.model');
require('./especialidad.model');
require('./estados.model');


require('./filtros.model');
require('./formapago.model');
require('./historiamedicas.model');
require('./horarios.model');
require('./iconos.model');
require('./jugadas.model');
require('./laboratorio.model');
require('./loterias.model');
require('./marcas.model');

require('./medicos.model');
require('./menus.model');
require('./modelos.model');
require('./modulos.model');
require('./ofertas.model');
require('./pacientes.model');
require('./pagos.model');
require('./permisos.model');
require('./premios.model');


require('./productos.model');

require('./proyectos.model');
require('./recetas.model');


require('./roles.model');
require('./sedes.model');

require('./servicios.model');
require('./slider.model');
require('./sorteos.model');
require('./terminales.model');

require('./tickets.model');
require('./ubicaciones.model');

require('./usuarios.model');
require('./ventas.model');
require('./visitas.model');

/**/