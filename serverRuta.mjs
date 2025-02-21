import express from 'express';

const app=express();
const PORT=3000;

//ruta get con parametros de ruta
//solicitus http://localhost:3000/user/123


app.get('/user/:id', (req,res)=>{
    const userId=req.params.id;
    console.log(`ID del usuario recibido; ${userId}`);
    res.send(`perfil del usuario recibido ${userId}`);
});

app.listen(PORT, ()=>{
    console.log (`servidor corriendo en http://localhost:${PORT}/user/`)
})