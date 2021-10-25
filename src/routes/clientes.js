const express = require('express');
const router = express.Router();
const conn = require('../database');

router.get('/',(req,res)=>{
        res.render('front.ejs', {
    });
    
});
router.get('/login',(req,res)=>{
    res.render('login.ejs', {
});

});
router.get('/admin',(req,res)=>{
    conn.query('SELECT * FROM cliente', (err, result)=>{
        console.log(result);
        res.render('admin.ejs', {
            data_cliente: result 
        });
    });
    
});

router.post('/crear_cliente', (req, res)=>{
    console.log(req.body);
    const { rut_cliente, telefono, email, nombre, apellido, contrasenia} = req.body;
    conn.query('INSERT INTO cliente SET?', {
        rut_cliente,
        telefono,
        email,
        nombre,
        apellido,
        contrasenia
    }, (err, result)=>{
        res.redirect('/');
    });
});

router.get('/', (req, res)=>{
    res.render('admin.ejs')
});

router.get('/delete_cliente/:rut_cliente', (req, res)=>{
    const {rut_cliente} = req.params;
    conn.query('DELETE FROM cliente WHERE rut_cliente= ?', [rut_cliente]);
    res.redirect('/');
});

router.get('/agregar_cliente',(req,res)=>{
    res.render('agregar_cliente.ejs')
});

//Consultas Entrega2
//Mostrar la id, nombre y rut de todas las mascotas de un rut
/*
router.get('/test',(req,res)=>{
    conn.query('SELECT id_mascota, mascota.nombre, mascota.rut_cliente FROM mascota INNER JOIN cliente ON mascota.rut_cliente = cliente.rut_cliente WHERE cliente.rut_cliente IN (SELECT rut_cliente FROM cliente WHERE nombre = "Andres" AND apellido = "Martinez")', (err, result)=>{
        console.log(result);
    });
    
});
*/

//Mostrar la id, nombre y rut de todas las mascotas de las personas con un nombre en especifico
/*
router.get('/test',(req,res)=>{
    conn.query('SELECT id_mascota, mascota.nombre, mascota.rut_cliente FROM mascota INNER JOIN cliente ON mascota.rut_cliente = cliente.rut_cliente WHERE cliente.rut_cliente IN (SELECT rut_cliente FROM cliente WHERE nombre = "Andres" AND apellido = "Martinez")', (err, result)=>{
        console.log(result);
        res.render('consulta.ejs', {
            data: result 
        });
    });
    
});
*/

//Mostrar todas las salas disponibles
/*
router.get('/test',(req,res)=>{
    conn.query('SELECT habitacion.id_habitacion, habitacion.peso_max, habitacion.habitacion_especie FROM habitacion INNER JOIN reserva_ocurre_en_habitacion ON habitacion.id_habitacion = reserva_ocurre_en_habitacion.id_habitacion INNER JOIN reserva ON reserva_ocurre_en_habitacion.id_reserva = reserva.id_reserva WHERE reserva.estado_reserva IN (SELECT estado_reserva FROM reserva WHERE estado_reserva = "terminado" OR estado_reserva = "abortado")', (err, result)=>{
        console.log(result);
        res.render('consulta.ejs', {
            data: result 
        });
    });
    
});
*/

//consultar el ultimo evento relacionado a una reserva
/*
router.get('/test',(req,res)=>{
    conn.query('SELECT reserva.id_reserva, mascota_necesita_reserva.id_mascota, evento.descripcion_evento, fecha_evento FROM evento INNER JOIN reserva ON evento.id_reserva = reserva.id_reserva INNER JOIN mascota_necesita_reserva ON evento.id_reserva = mascota_necesita_reserva.id_reserva WHERE evento.fecha_evento = (SELECT MAX(evento.fecha_evento) FROM evento WHERE evento.id_reserva=2)', (err, result)=>{
        console.log(result);
        res.render('consulta.ejs', {
            data: result 
        });
    });
    
});

*/

//agrupar mascotas por especie
/*
router.get('/test',(req,res)=>{
    conn.query('SELECT mascota.id_mascota, mascota.nombre, mascota.especie, cliente.rut_cliente, cliente.nombre, cliente.apellido FROM mascota INNER JOIN cliente ON mascota.rut_cliente = cliente.rut_cliente GROUP BY mascota.especie', (err, result)=>{
        console.log(result);
        res.render('consulta.ejs', {
            data: result 
        });        
    });
    
});
*/

//agrupar mascotas por sexo
/*
router.get('/test',(req,res)=>{
    conn.query('SELECT mascota.id_mascota, mascota.nombre, mascota.especie, mascota.sexo, cliente.rut_cliente, cliente.nombre, cliente.apellido FROM mascota INNER JOIN cliente ON mascota.rut_cliente = cliente.rut_cliente GROUP BY mascota.sexo', (err, result)=>{
        console.log(result);
        res.render('consulta.ejs', {
            data: result 
        }); 
    });
    
});
*/

//agrupar evento por reserva
/*
router.get('/test',(req,res)=>{
    conn.query('SELECT evento.id_evento, evento.id_reserva, evento.descripcion_evento, evento.fecha_evento, staff.rut_staff, staff.rol FROM evento INNER JOIN staff ON evento.rut_staff = evento.rut_staff GROUP BY evento.rut_staff', (err, result)=>{
        console.log(result);
        res.render('consulta.ejs', {
            data: result 
        });
    });
    
});
*/
//agrupar fecha_sanitizacion por id_habitacion
/*
router.get('/test',(req,res)=>{
    conn.query('SELECT fecha_sanitizacion.id_habitacion, fecha_sanitizacion.fecha, habitacion.peso_max, habitacion.habitacion_especie FROM fecha_sanitizacion INNER JOIN habitacion ON fecha_sanitizacion.id_habitacion = fecha_sanitizacion.id_habitacion GROUP BY fecha_sanitizacion.id_habitacion', (err, result)=>{
        console.log(result);
        res.render('consulta.ejs', {
            data: result 
        });
    });
    
});
*/
//agrupar fecha_sanitizacion por id_habitacion
/*
router.get('/test',(req,res)=>{
    conn.query('SELECT mascota.id_mascota, mascota.nombre, habitacion.id_habitacion, habitacion.peso_max, habitacion.habitacion_especie FROM mascota INNER JOIN mascota_necesita_reserva ON mascota.id_mascota = mascota_necesita_reserva.id_mascota INNER JOIN reserva ON mascota_necesita_reserva.id_reserva = reserva.id_reserva INNER JOIN reservaSELECT mascota.id_mascota, mascota.nombre, habitacion.id_habitacion, habitacion.peso_max, habitacion.habitacion_especie FROM mascota INNER JOIN mascota_necesita_reserva ON mascota.id_mascota = mascota_necesita_reserva.id_mascota INNER JOIN reserva ON mascota_necesita_reserva.id_reserva = reserva.id_reserva INNER JOIN reserva_ocurre_en_habitacion ON reserva.id_reserva = reserva_ocurre_en_habitacion.id_reserva INNER JOIN habitacion ON reserva_ocurre_en_habitacion.id_habitacion = habitacion.id_habitacion GROUP BY habitacion.peso_max_ocurre_en_habitacion ON reserva.id_reserva = reserva_ocurre_en_habitacion.id_reserva INNER JOIN habitacion ON reserva_ocurre_en_habitacion.id_habitacion = habitacion.id_habitacion GROUP BY habitacion.peso_habitacion', (err, result)=>{
        console.log(result);
        res.render('consulta.ejs', {
            data: result 
        });
    });
});
*/
//agrupar mascotas segun el peso de la habitacion donde se encuentran
/*
router.get('/test',(req,res)=>{
    conn.query('SELECT mascota.id_mascota, mascota.nombre, habitacion.id_habitacion, habitacion.peso_max, habitacion.habitacion_especie FROM mascota INNER JOIN mascota_necesita_reserva ON mascota.id_mascota = mascota_necesita_reserva.id_mascota INNER JOIN reserva ON mascota_necesita_reserva.id_reserva = reserva.id_reserva INNER JOIN reserva_ocurre_en_habitacion ON reserva.id_reserva = reserva_ocurre_en_habitacion.id_reserva INNER JOIN habitacion ON reserva_ocurre_en_habitacion.id_habitacion = habitacion.id_habitacion GROUP BY habitacion.peso_habitacion', (err, result)=>{
        console.log(result);
        res.render('consulta.ejs', {
            data: result 
        });
    });
});

*
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//Consultas Entrega1
//////////////////////////////////////////////////
//agregar la columna 'prueba1' de tipo varchar  con una longitud de 20 caracteres a la tabla cliente 
/*
router.get('/test',(req,res)=>{
    conn.query('ALTER TABLE cliente ADD COLUMN prueba1 VARCHAR(20)', (err, result)=>{
        console.log(result);
        res.render('admin.ejs', {
            data_cliente: result 
        });
    });
    
});
*/

//eliminar la columna 'prueba1' de la tabla cliente 
/*
router.get('/test',(req,res)=>{
    conn.query('ALTER TABLE cliente DROP prueba1', (err, result)=>{
        console.log(result);

    });
    
});
*/
//cambiar el valor de la fecha tabla fecha_sanitizacion cuando la id de la habitacion sea igual a '1' 
/*
router.get('/test',(req,res)=>{
    conn.query('UPDATE fecha_sanitizacion SET fecha = "2021-09-10" WHERE id_habitacion=1', (err, result)=>{
        console.log(result);
    });
    
});
*/
//cambiar el peso de una mascota y la fecha de su registro cuando la id de la mascota sea igual a '2'
/*
router.get('/test',(req,res)=>{
    conn.query('UPDATE peso_actual SET peso = 4.5 , fecha = "2021-09-28" WHERE id_mascota = 2', (err, result)=>{
        console.log(result);
    });
    
});
*/
//agregar una nueva habitacion a la tabla de habitaciones
/*
router.get('/test',(req,res)=>{
    conn.query('INSERT INTO habitacion VALUES (9,30.7,"perro")', (err, result)=>{
        console.log(result);
    });
    
});
*/
//agregar un evento a la tabla de eventos 
/*
router.get('/test',(req,res)=>{
    conn.query('INSERT INTO evento VALUES (2,3,1986738305,"2021-09-27", "se realizo la sanitizacion de la sala 2")' , (err, result)=>{
        console.log(result);
    });
    
});
*/
//agregar una nueva fecha de sanitizacion a la tabla de fechas de sanitizaciones
/*
router.get('/test',(req,res)=>{
    conn.query('INSERT INTO fecha_sanitizacion VALUES(3,"2021-09-27")' , (err, result)=>{
        console.log(result);
    });
    
});
*/
//eliminar la mascota cuya descripcion sea "narcolepsia"
/*
router.get('/test',(req,res)=>{
    conn.query('DELETE FROM Mascota WHERE descripcion = "narcolepsia"' , (err, result)=>{
        console.log(result);
    });
    
});
*/
//eliminar la mascota cuya descripcion sea "No le gusta comer"
/*
router.get('/test',(req,res)=>{
    conn.query('DELETE FROM Mascota WHERE descripcion = "No le gusta comer"' , (err, result)=>{
        console.log(result);
    });
    
});
*/
//eliminar la tabla fecha de sanitizacion
/*
router.get('/test',(req,res)=>{
    conn.query('DROP TABLE fecha_sanitizacion' , (err, result)=>{
        console.log(result);
    });
    
});
*/
//mostrar nombre y apellido de los clientes
/*
router.get('/test',(req,res)=>{
    conn.query('SELECT nombre,apellido  FROM cliente' , (err, result)=>{
        console.log(result);
    });
    
});
*/
//datos del cliente y su respectivas mascotas
/*
router.get('/test',(req,res)=>{
    conn.query('SELECT * FROM cliente INNER JOIN mascota ON cliente.rut_cliente = mascota.rut_cliente' , (err, result)=>{
        console.log(result);
    });
    
});
*/
//nombre de mascota y su respectiva id de habitacion
/*
router.get('/test',(req,res)=>{
    conn.query('SELECT mascota.nombre , habitacion.id_habitacion FROM mascota INNER JOIN reserva ON mascota.id_mascota = reserva.id_mascota INNER JOIN habitacion ON reserva.id_habitacion = habitacion.id_habitacion' , (err, result)=>{
        console.log(result);
    });
    
});
*/
module.exports = router