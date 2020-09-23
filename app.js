//Requerimos todo lo que vamos a usar
//Requerimos express
const express = require('express');
//Instanciamos express
const app = express();
//Módulo (path) nativo de node para trabajar con rutas de archivos
const path = require ('path');

//Ruta raíz
app.get('/', (req, res) => {
    let routeFile = path.resolve('./Vistas/index.html');
    res.sendFile(routeFile);
}); 

app.get('/registrer', (req, res) => {
    let routeFile = path.resolve('Vistas/registrer.html');
    res.sendFile(routeFile);
}); 

app.get('/login', (req, res) => {
    let routeFile = path.resolve('Vistas/login.html');
    res.sendFile(routeFile);
}); 

// Ruta para archivos
app.get('*', (req, res) => { 
    if(req.url.includes('.')){
        let file = path.resolve('Public' + req.url)
        return res.sendFile(file)
    };
    res.sendFile('404 Not Found');
})
//http://localhost:3000/
app.listen(3000, () => console.log('Server running ok on port 3000'));

