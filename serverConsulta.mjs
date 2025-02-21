import express from 'express';

const app= express();
const PORT= 3000;
const edad=30;

//ruta get con parametros de consulta
//solicitud: https://localhost:300/profile?edad=30
app.get('/profile', (req,res)=>{
    const edad=req.query.edad;
    console.log(`edad recibida ${edad}`);
    res.send(`edad del perfil: ${edad}`);
});

app.listen(PORT, ()=>{
    console.log(`server corriendo en http://localhost:${PORT}/profile?edad=${edad}`);
});
