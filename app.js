const express = require('express');
const axios = require('axios')
const app = express();
var phaseId = []
var info = []
var date = ""

date = new Date()

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.post('/pipe-pedidos', async (req, res) => {

  info = req.body.data

  console.log("[Pipe Pedidos]"+info.action+" de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+date)


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

    res.status(200).end()
  }

});

app.post('/pipe-associados', async (req, res) => {
  
  info = req.body.data

  console.log("[Pipe Associados]"+info.action+" de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+date)


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

    res.status(200).end()
  }

});

app.post('/pipe-servicos', async (req, res) => {

  info = req.body.data

   console.log("[Pipe Serviços]"+info.action+" de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+date)

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

    res.status(200).end()
  }

});

app.post('/pipe-liga', async (req, res) => {

  info = req.body.data

   console.log(info.action+" de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+date)

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

    res.status(200).end()
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

    res.status(200).end()
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

    res.status(200).end()
  }

});

app.listen(process.env.PORT || 3000, () => {
    console.log('listening on *:3000');
  });
  
