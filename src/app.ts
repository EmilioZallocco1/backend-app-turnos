import 'reflect-metadata';
import express from "express";
import { Paciente } from "./paciente.js";
import { orm,synsSchema } from './db/orm.js';
import { RequestContext } from '@mikro-orm/core';



const app = express();
app.use(express.json())


//luego de los middleware base 

app.use((req, res, next) => {
  RequestContext.create(orm.em, next);
})

//antes de las rutas y middlewares de nuestro proyecto


//get: obtener informacion sobre recursos
//post: crear nuevos recursos
//delete: borrar recursos
//put y patch: modificar recursos

//character --> /api/characters/
const pacientes = [
    new Paciente(1,"javier",23),
  ];

app.get("/api/pacientes", (req, res) => {
  res.json({data:pacientes});
});

//recupero el personaje que corresponde al id solicitado.
app.get("/api/pacientes/:id", (req, res) => {
  const paciente = pacientes.find((paciente) => paciente.id === parseInt(req.params.id)); // de esta forma recupera el personaje que corresponde a el id
  if (!paciente) {
    res.status(404).send({ message: "paciente not found" })
}
  res.json({data: paciente})
})


app.post('/api/pacientes', (req,res) => {
    const {id, nombre, edad} = req.body
    
    const paciente = new Paciente (id,nombre,edad)
    
    pacientes.push(paciente) //lo sumo al array
    res.status(201).send({message: 'paciente creado', data: paciente})
})


app.put('/api/pacientes/:id',(req, res) => {
  const pacienteIdx = pacientes.findIndex((paciente) => paciente.id === parseInt(req.params.id)) 

  if(pacienteIdx === -1) {
    res.status(404).send({message:'not found paciente'})
  }
  
  const input={
    id: req.body.id,
    nombre: req.body.nombre,
    edad: req.body.edad
  } 
  pacientes[pacienteIdx] = {...pacientes[pacienteIdx],...input}
  
  res.status(200).send({message:'character actualizado',data:pacientes[pacienteIdx]})
})

await synsSchema() //genera la base de datos con la estructura que nosotros le indicamos. NUNCA EN PRODUCCION


app.listen(4200, () => {
  console.log("server running on port 4200");
});
