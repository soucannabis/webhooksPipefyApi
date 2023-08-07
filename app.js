const express = require('express');
const axios = require('axios')
const app = express();
var phaseId = []
var info = []
var api = []
var date = ""

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const pipeAssociados = require("./routes/pipe-associados")
const pipeJuridico = require("./routes/pipe-juridico")
const pipeComunicacao = require("./routes/pipe-comunicacao")
const pipePedidos = require("./routes/pipe-pedidos")
const pipeParceiros = require("./routes/pipe-parceiros")
const pipeAgendamento = require("./routes/pipe-agendamento")
const assAssociado = require("./routes/ass-associado")
const assProcuracao = require("./routes/ass-procuracao")
const assConsentimento = require("./routes/ass-consentimento")
const assComunicacao = require("./routes/ass-comunicacao")
const assParceiro = require("./routes/ass-parceiro")
const assCadastrotcle = require("./routes/ass-cadastro-tcle")


app.use("/", pipeAssociados)
app.use("/", pipeJuridico)
app.use("/", pipeComunicacao)
app.use("/", pipePedidos)
app.use("/", pipeParceiros)
app.use("/", pipeAgendamento)
app.use("/", assProcuracao)
app.use("/", assAssociado)
app.use("/", assConsentimento)
app.use("/", assComunicacao)
app.use("/", assParceiro)
app.use("/", assCadastrotcle)


app.post('/pipe-servicos', async (req, res) => {
  date = new Date()

  info = req.body.data
  api.push(info)
  phaseId = req.body.data.to.id

  if(phaseId == "311283175"){
    
   console.log("[Pipe Serviços]"+info.action+" de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+date)
    

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

  return api

});

app.post('/pipe-liga', async (req, res) => {
  date = new Date()

  info = req.body.data
  api.push(info)
  
  phaseId = req.body.data.to.id

  if(phaseId == "315282518"){
    
   console.log("[Pipe Liga]"+info.action+" de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+date)
    
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

  if(phaseId == "315282523"){ 
    
   console.log("[Pipe Liga]"+info.action+" de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+date)
        
   console.log(info.action+" de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+date)

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

  if(phaseId == "315282527"){ 
    
   console.log("[Pipe Liga]"+info.action+" de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+date)
    
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

  return api

});



  






app.listen(process.env.PORT || 3000, () => {
    console.log('Webhooks Pipefy API RUN!');
  });
  
