const express = require("express");
const path = require("path");
const app = express();

const publicFolderPath = path.resolve(__dirname, "./public");
app.use(express.static(publicFolderPath) );
/* Se encarga de montar un servidor */
app.listen(3000, () =>{
    console.log("Server corriendo");
})
/* Dentro del servidor, genera las rutas y muestra contenido dentro de llas 
Está compuesto por la ruta, luego un callback que tiene los parámetros req y res.*/
app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
})





/* 
app.get('/Contacto', function(req, res){
    res.send("Bienvenido al contacto");
})
app.get('/un-array', function(req, res){
    res.send([1,2,3,4]);
})
app.get('/un-objeto', function(req, res){
    res.send({name: "Peje"});
}) */