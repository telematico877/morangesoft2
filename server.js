require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

/*const Usuarios = mongoose.model('usuarios');
const Proyectos = mongoose.model('proyectos');
const Roles = mongoose.model('roles');
const Sedes = mongoose.model('sedes');
const Horarios = mongoose.model('horarios');
const Empresas = mongoose.model('empresas');
*/

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.send('Welcome to my API!');
  });
 
/* Pasar
 end -points de la documentacion Api Morangesoft v 1.0 a Nodes js */
  /*lista la tala, valido para todos los esquemas */ 
  app.get('/data-table', (req, res) => {
    var tabla=req.query.tableName;
    const esquema = mongoose.model(tabla);
    esquema.find((err, docs) => {
      if (err) throw err;
  
      if (docs.length > 0) {
        res.json(docs);
      } else {
        res.send("No hay resultado");
      }
  
  }); 
   });
  
   /* Añadir de forma general para todas las tablas segundocumentacions*/ 
   app.get('/addNuevo', (req, res) => {
 
    var nombretabla  = req.query.nombretabla;
    var nombreid  = req.query.nombreid;
    var id  = req.query.id;

    var datos  = [];
    var nombrecampo="";
    var valorCampo="";
    var opcionalSet="";
   
    if(nombretabla!=null && nombreid!=null&& id!=null){
    for (var propName in req.query) {
       if (req.query.hasOwnProperty(propName) && propName!='nombretabla' && propName!='nombreid' && propName!='id') {
        var myObj = {};
        if(opcionalSet!='')
           nombrecampo=nombrecampo+","+myObj[propName]+":  '"+req.query[propName]+"'";
        else
        nombrecampo="+"+myObj[propName]+":  '"+req.query[propName]+"'";
             
         }
       }
      var Datos={nombrecampo};

      var tabla=req.query.tableName;
       const esquema = mongoose.model(tabla);

           //use schema.create to insert data into the db
      esquema.create(Datos, function (error, user) {
        if (error) {
          throw error;
        } else {
          res.send('Registro creado!');
        }
      });
    }else{
      res.send("nombreTabla, nombreid y id son oligatorios");
     }
     });
   
  
  
     app.get('/editar', (req, res) => {
 
      var nombretabla  = req.query.nombretabla;
      var nombreid  = req.query.nombreid;
      var id  = req.query.id;
  
      var datos  = [];
      var nombrecampo="";
      var valorCampo="";
      var opcionalSet="";
     
      if(nombretabla!=null && nombreid!=null&& id!=null){
        var tabla=req.query.tableName;
         const esquema = mongoose.model(tabla);
  
             //use schema.create to insert data into the db
        esquema.findOneAndUpdate({ codigo: req.query.codigo }, req.query, { new: true }, (err, doc) => {
          if (error) {
            throw error;
          } else {
            res.send('Registro atualizado!');
          }
        });
      }else{
        res.send("nombreTabla, nombreid y id son oligatorios");
       }
       });
   
       app.get('/eliminar', (req, res) => {
 
        var nombretabla  = req.query.nombretabla;
        var nombreid  = req.query.nombreid;
        var id_  = req.query.id;
    
        var datos  = [];
        var nombrecampo="";
        var valorCampo="";
        var opcionalSet="";
      
          var tabla=req.query.tableName;
           const esquema = mongoose.model(tabla);
    
               //use schema.create to insert data into the db
          esquema.findByIdAndRemove(req.query.id_, (err, doc) => {
            if (err) throw err;
            res.send('Equipo borrado');
      
         });
        });
   
  /**Crear Proyecto **/
 app.get('/crearProyectos', (req, res) => {

  if (req.query.codigo &&
      req.query.nombre 
      ) {
      var proyectoDatos = {
        codigo: req.query.codigo,
        nombre: req.query.nombre,
        servidor: req.query.servidor,
        encargado:req.query.encargado,
        activo:req.query.activo

      }
      //use schema.create to insert data into the db
      Proyectos.create(proyectoDatos, function (error, user) {
        if (error) {
          throw error;
        } else {
          res.send('Proyecto creado!');
        }
      });
    }

});

app.get('/listarProyectos', (req, res) => {
  Proyectos.find((err, docs) => {
    if (err) throw err;

    if (docs.length > 0) {
      res.json(docs);
    } else {
      res.send("No hay resultado");
    }

});
});
 

app.get('/actualizarProyectos', (req, res) => {
  Proyectos.findOneAndUpdate({ codigo: req.query.codigo }, req.query, { new: true }, (err, doc) => {
    if (err) throw err;
      res.send('Se Actualizo el Proyecto'+req.query._id);
   
});
});

app.get('/borrarProyectos', (req, res) => {
  Proyectos.findByIdAndRemove(req.query.id_, (err, doc) => {
    if (err) throw err;
    res.send('Equipo borrado');
});

});

/*roles*/


  /**Crear Usuario **/

/*  app.post('/crearUsuario', (req, res) => {

    if (req.body.usuario &&
        req.body.password &&
        req.body.id_rol && req.body.id_rol
        ) {
        var usuarioDatos = {
            usuario: req.body.usuario,
            password: req.body.password,
          id_rol: req.body.id_rol,
        }
        //use schema.create to insert data into the db
        Usuarios.create(usuarioDatos, function (error, user) {
          if (error) {
            throw error;
          } else {
            res.send('Usuario creado!');
          }
        });
      }

});
*/
app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

//p.use('/employee', employeeController);