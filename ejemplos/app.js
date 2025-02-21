import express from 'express';

//crear una instancia express
const app= express();

//configurar el puerto en el que el servidor escuchará
const PORT=3000;

//ruta 
app.get('/', (req, res)=> {
    res.send('hola, mundo!');
});

//inicar el servidor
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});




/* -- ruta get para el home --- */

//solicitud  http://localhost:3000/
app.get('/',(req,res)=>{
    res.send('pagina de inicio');
});

//ruta get para recibir datos simples
//solicitud http://localhost:3000/data

app.get('/data', (req,res)=>{
    res,send('Datos recibidos');
})



/* -- ruta get para parametros de ruta --- */
//solicitud http://localhost:3000/user/123

app.get('/user/:id', (req,res)=>{
    const userId=req.params.id;
    res,send(`perfil del usuario con ID: ${userId}`);
});

/* -- ruta get con multiparametros --- */
//solicitud http://localhost:3000/product/electronics/456
app.get('/product/:category/:id', (req,res)=>{
    const {category, id}=req.params;
    res,send(`categoria: ${category} ,ID del producto: ${id}`);
})

/* -- ruta get con parametros de consulta--- */
//solicitud http://localhost:3000/search?q=javascript

app.get('/search', (req, res)=>{
    const query = req.query.q;
    res.send(`El resultado para ${query} es : ${query}`);
});

/* -- ruta get con multipklesparametros de consulta--- */
//solicitud http://localhost:3000/filter?type=book&minPrice=10&maxPrice=50
app.get('/filter', (req, res)=>{
    const {type, minPrice, maxPrice} = req.query;
    res.send(`Filtrar por rango de precios ${type}, rango de precios ${minPrice} - ${maxPrice}`)
})