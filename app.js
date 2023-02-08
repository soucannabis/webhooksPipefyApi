const express = require('express');
const axios = require('axios')
const app = express();
const {utcToZonedTime, format } = require('date-fns-tz')
const timeZone = 'America/Sao_Paulo'
var zonedDate = ""
const pattern = 'd.M.yyyy HH:mm:ss'
var datetime = ""

var phaseId = []
var info = []
var infos = []
var api = []
var date = ""



app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));



app.get('/api', async (req, res) => {
  res.send(api)
})

app.post('/pipe-associados', async (req, res) => {
date = new Date()  
zonedDate =  utcToZonedTime(date, timeZone)
datetime = format(zonedDate, pattern)
info = req.body.data

console.log("[Pipe Associados] "+info.action+" ("+info.card.title+") de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+datetime)

infos = {
  "pipe":"sou-associados",
  "action":info.action,
  "cardTitle":info.card.title,
  "lastPhase":info.from.name,
  "phase":info.to.name,
  "moved":info.moved_by.name,
  "datetime":datetime
}

api.push(infos)

phaseId = req.body.data.to.id

if(phaseId == "316891688"){

  const options = {
  method: "POST",
  headers:{"Content-Type": "application/json"},
  mode: "cors",
  data: req.body.data,
  url: "https://eot9ant5nl3yh5q.m.pipedream.net"
  }

  await axios(options)   
}

res.status(200).end()

return api

});


app.post('/pipe-pedidos', async (req, res) => {

  date = new Date()  
  zonedDate =  utcToZonedTime(date, timeZone)
  datetime = format(zonedDate, pattern)
  info = req.body.data

  infos = {
    "pipe":"sou-pedidos",
    "action":info.action,
    "cardTitle":info.card.title,
    "lastPhase":info.from.name,
    "phase":info.to.name,
    "moved":info.moved_by.name,
    "datetime":datetime
  }

  api.push(infos)
  console.log("[Pipe Pedidos]"+info.action+" ("+info.card.title+") de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+datetime)


  phaseId = req.body.data.to.id

  if(phaseId == "310523364"){ 
   
    const options = {
    method: "POST",
    headers:{"Content-Type": "application/json"},
    mode: "cors",
    data: req.body.data,
    url: "https://eo4r0f2xwt5bfc4.m.pipedream.net"
    }

    await axios(options)

    res.status(200).end()
  }

  if(phaseId == "311232364"){ 
   
    const options = {
    method: "POST",
    headers:{"Content-Type": "application/json"},
    mode: "cors",
    data: req.body.data,
    url: "https://eownrtbxf42g5iq.m.pipedream.net"
    }

    await axios(options)   
  }

  res.status(200).end()

  return api

});


app.post('/pipe-servicos', async (req, res) => {
  date = new Date()  
  zonedDate =  utcToZonedTime(date, timeZone)
  datetime = format(zonedDate, pattern)
  info = req.body.data
  info.push(datetime)

  infos = {
    "pipe":"sou-servicos",
    "action":info.action,
    "cardTitle":info.card.title,
    "lastPhase":info.from.name,
    "phase":info.to.name,
    "moved":info.moved_by.name,
    "datetime":datetime
  }


  api.push(infos)

  console.log("[Pipe Serviços] "+info.action+" de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+datetime)

  phaseId = req.body.data.to.id

  if(phaseId == "311283175"){

    const options = {
    method: "POST",
    headers:{"Content-Type": "application/json"},
    mode: "cors",
    data: req.body.data,
    url: "https://eokfrenqj4pqhcr.m.pipedream.net"
    }

    await axios(options)
  }

  res.status(200).end()

  return api

});


app.post('/pipe-liga', async (req, res) => {
  date = new Date()  
  zonedDate =  utcToZonedTime(date, timeZone)
  datetime = format(zonedDate, pattern)
  info = req.body.data

  infos = {
    "pipe":"pipe-liga",
    "action":info.action,
    "cardTitle":info.card.title,
    "lastPhase":info.from.name,
    "phase":info.to.name,
    "moved":info.moved_by.name,
    "datetime":datetime
  }

  api.push(infos)

  console.log("[Pipe Liga] "+info.action+" de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+datetime)

  phaseId = req.body.data.to.id

  if(phaseId == "315282518"){ //enviar boleto

    const options = {
    method: "POST",
    headers:{"Content-Type": "application/json"},
    mode: "cors",
    data: req.body.data,
    url: "https://eov7j1f3uwn7i6w.m.pipedream.net"
    }

    await axios(options)
  }

  if(phaseId == "315282523"){ // pedido enviado
    const options = {
    method: "POST",
    headers:{"Content-Type": "application/json"},
    mode: "cors",
    data: req.body.data,
    url: "https://eoe8jc2i2i640d1.m.pipedream.net"
    }

    await axios(options)
  }

  if(phaseId == "315282527"){ // msg whatsapp
    const options = {
    method: "POST",
    headers:{"Content-Type": "application/json"},
    mode: "cors",
    data: req.body.data,
    url: "https://eo65mx1ja7g7la8.m.pipedream.net"
    }

    await axios(options)

  }

  res.status(200).end()
  return api

});

app.post('/pipe-comunicacao', async (req, res) => {
  date = new Date()  
  zonedDate =  utcToZonedTime(date, timeZone)
  datetime = format(zonedDate, pattern)
  info = req.body.data
  
  console.log("[Pipe Comunicação] "+info.action+" ("+info.card.title+") de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+datetime)
  
  infos = {
    "pipe":"sou-comunicacao",
    "action":info.action,
    "cardTitle":info.card.title,
    "lastPhase":info.from.name,
    "phase":info.to.name,
    "moved":info.moved_by.name,
    "datetime":datetime
  }
  
  api.push(infos)
  
  phaseId = req.body.data.to.id
  
  if(phaseId == "318409148"){
  
    const options = {
    method: "POST",
    headers:{"Content-Type": "application/json"},
    mode: "cors",
    data: req.body.data,
    url: "https://eo9hfgd2rdx1cre.m.pipedream.net"
    }
  
    await axios(options)   
  }
  
  res.status(200).end()
  
  return api
  
  });


app.listen(process.env.PORT || 3000, () => {
    console.log('Webhooks Pipefy Api Run!');
  });
  
