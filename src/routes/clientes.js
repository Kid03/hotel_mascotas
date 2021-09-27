const express = require('express');

const conn = require('../config/database');

//agregar la columna 'prueba1' de tipo varchar  con una longitud de 20 caracteres a la tabla cliente 
/* conn.query("ALTER TABLE cliente ADD COLUMN prueba1 VARCHAR(20)", (err,resp) =>{
    console.log(resp);
}); */

//eliminar la columna 'prueba1' de la tabla cliente 
/* conn.query("ALTER TABLE cliente DROP prueba1", (err,resp) =>{
    console.log(resp);
});
 */

//cambiar el valor de la fecha tabla fecha_sanitizacion cuando la id de la habitacion sea igual a '1' 
/* conn.query("UPDATE fecha_sanitizacion SET fecha = '2021-09-10' WHERE id_habitacion=1", (err,resp) => {
    console.log(resp);
}); */

//cambiar el peso de una mascota y la fecha de su registro cuando la id de la mascota sea igual a '2'
/* conn.query("UPDATE peso_actual SET peso = 4.5 , fecha = '2021-09-28' WHERE id_mascota = 2", (err,resp) => {
    console.log(resp);
});
 */

// agregar una nueva habitacion a la tabla de habitaciones
/* conn.query("INSERT INTO habitacion VALUES (9,30.7,'perro')", (err,resp) => {
    console.log(resp);
});
 */

//agregar un evento a la tabla de eventos 
/* conn.query("INSERT INTO evento VALUES (2,3,1986738305,'2021-09-27', 'se realizo la sanitizacion de la sala 2')", (err,resp) => {
    console.log(resp);
}); */

//agregar una nueva fecha de sanitizacion a la tabla de fechas de sanitizaciones
/* conn.query("INSERT INTO fecha_sanitizacion VALUES(3,'2021-09-27')", (err,resp) => {
    console.log(resp);
}); */

// eliminar la mascota cuya descripcion sea "narcolepsia"
/* conn.query("DELETE FROM Mascota WHERE descripcion = 'narcolepsia'", (err,resp) => {
    console.log(resp);
}); */

// eliminar la mascota cuya descripcion sea "No le gusta comer"
/* conn.query("DELETE FROM Mascota WHERE descripcion = 'No le gusta comer'", (err,resp) => {
    console.log(resp);
}); */

//eliminar la tabla fecha de sanitizacion
/* conn.query("DROP TABLE fecha_sanitizacion", (err,resp) => {
    console.log(resp);
}); */


//datos del cliente y su respectivas mascotas
/* conn.query("SELECT * FROM cliente INNER JOIN mascota ON cliente.rut_cliente = mascota.rut_cliente", (err,resp) => {
    console.log(resp);
});
 */


//nombre de mascota y su respectiva id de habitacion
/* conn.query("SELECT mascota.nombre , habitacion.id_habitacion FROM mascota INNER JOIN reserva ON mascota.id_mascota = reserva.id_mascota INNER JOIN habitacion ON reserva.id_habitacion = habitacion.id_habitacion", (err,resp) => {
    console.log(resp);
});
 */
