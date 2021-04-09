require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');


var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.send('Bienvenido al API!');
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
    var myObj = new Object();
    if(nombretabla!=null){
    for (var propName in req.query) {
       if (req.query.hasOwnProperty(propName) && propName!='nombretabla' && propName!='nombreid' && propName!='id') {
        myObj[propName] =req.query[propName];
      }
      }
 
     
      var tabla=req.query.nombretabla;
       const esquema = mongoose.model(tabla);
       
       //use schema.create to insert data into the db
           esquema.create(myObj, function (error, user) {
        if (error) {
          res.json({status:"error"});
        } else {
          res.json({status:"success",msg:"Creado con exito"})
        }
      });
    
      
    }else{
      res.send("nombreTabla oligatorios");
     }
     });
   
  
  
     app.get('/editar', (req, res) => {
 
      var nombretabla  = req.query.nombretabla;
      var codigo =req.query.codigo;
      var datos  = [];
      var nombrecampo="";
      var valorCampo="";
      var opcionalSet="";
     
      if(nombretabla!=null && codigo!=null){
        var tabla=req.query.nombretabla;
         const esquema = mongoose.model(tabla);
  
             //use schema.create to insert data into the db
        esquema.findOneAndUpdate({ codigo: req.query.codigo }, req.query, { new: true }, (err, doc) => {
          if (err) {
            res.json({status:"error"});
          } else {
            res.json({status:"success",msg:"Actualizado con exito"})
          }
        });
      }else{
        res.send("nombreTabla, codigo son oligatorios");
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
       
      if(nombretabla!=null && id_!=null){
          var tabla=req.query.nombretabla;
           const esquema = mongoose.model(tabla);
    
               //use schema.create to insert data into the db
          esquema.findByIdAndRemove(req.query.id, (err, doc) => {
            if (err) res.json({status:"error"});
            res.json({status:"success",msg:"Borrado con exito"})
            
      
         });

      }else{
        res.send("nombreTabla, id son oligatorios");
       }
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

const PORT_SERVER = process.env.PORT || 3000;

app.listen(PORT_SERVER, () => {
    console.log(`Server running on port ${PORT_SERVER}`);
});

//p.use('/employee', employeeController);