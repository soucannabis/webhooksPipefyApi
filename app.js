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
const assAssociado = require("./routes/ass-associado")

app.use("/", pipeAssociados)
app.use("/", assAssociado)
app.use("/", pipeJuridico)

app.post('/pipe-pedidos', async (req, res) => {

  date = new Date()

  info = req.body.data
  api.push(info)

  phaseId = req.body.data.to.id

  if(phaseId == "310523364"){ 
    
    console.log("[Pipe Pedidos]"+info.action+" de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+date)    
   
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
    
    console.log("[Pipe Pedidos]"+info.action+" de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+date)
      
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



  app.post('/pipe-comunicacao', async (req, res) => {
    date = new Date()  
    info = req.body.data
    var options = ''
       
    infos = {
      "pipe":"sou-comunicacao",
      "action":info.action,
      "cardTitle":info.card.title,
      "lastPhase":info.from.name,
      "phase":info.to.name,
      "moved":info.moved_by.name,
      "datetime":date
    }
    
    api.push(infos)
    
    phaseId = req.body.data.to.id
    
    if(phaseId == "318409148"){
      
    console.log("[Pipe Comunicação] "+info.action+" ("+info.card.title+") de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+date)
          
      options = {
      method: "POST",
      headers:{"Content-Type": "application/json"},
      mode: "cors",
      data: req.body.data,
      url: "https://eo77qwdnypcffz8.m.pipedream.net"
      }
    
      await axios(options)   
    }
          
     if(phaseId == "318021433"){
             
    console.log("[Pipe Comunicação] "+info.action+" ("+info.card.title+") de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+date)

      options = {
      method: "POST",
      headers:{"Content-Type": "application/json"},
      mode: "cors",
      data: {body:req.body.data},
      url: "https://0574071a03a930af20271fa9e74f5062.m.pipedream.net"
      }
    
      await axios(options)   
    }
    
    res.status(200).end()
    
    return api
    
    });


app.post('/ass-comunicacao', async (req, res) => {
  date = new Date()   
 
  if(req.body.name == "Termo de concessão de uso de imagem"){
    
    console.log("[Ass Comunicação] Contrato Assinado por: "+req.body.signers[0].name+" - "+date)
       
    const options = {
    method: "POST",
    headers:{"Content-Type": "application/json"},
    mode: "cors",
    data: req.body,
    url: "https://eo8g7v59cszwerv.m.pipedream.net"
    }
  
    await axios(options)   
   
  res.status(200).end()
    
  }  
  });

app.post('/ass-consentimento', async (req, res) => {
  date = new Date()  

  if(req.body.name == "Termo de Consentimento Livre e Esclarecido"){
    
    console.log("[Ass Consentimento] Contrato Assinado por: "+req.body.signers[0].name+" - "+date)
       
    const options = {
    method: "POST",
    headers:{"Content-Type": "application/json"},
    mode: "cors",
    data: req.body,
    url: "https://eotfocfqrifr17d.m.pipedream.net"
    }
  
    await axios(options)   
   
  res.status(200).end()
    
  }  
  });

  app.post('/ass-procuracao', async (req, res) => {
    date = new Date()  
  
    if(req.body.name == "Procuração Pontual"){
      
      console.log("[Ass Procuração] Procuração Assinada por: "+req.body.signers[0].name+" - "+date)
         
      const options = {
      method: "POST",
      headers:{"Content-Type": "application/json"},
      mode: "cors",
      data: req.body,
      url: "https://eo8d11dz3hnncjo.m.pipedream.net"
      }
    
      await axios(options)   
     
    res.status(200).end()
      
    }  
    });
//teste
app.listen(process.env.PORT || 3000, () => {
    console.log('Webhooks Pipefy API RUN!');
  });
  
