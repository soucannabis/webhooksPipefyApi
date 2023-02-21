const axios = require('axios')
const express = require("express")
const router = express.Router()
 
var date = ""

app.post('/ass-comunicacao', async (req, res) => {
    date = new Date()   
   
    if(req.body.name == "Termo de concessão de uso de imagem"){
      
      console.log("[Ass Comunicação] Contrato Assinado por: "+req.body.signers[0].name+" - "+date)
         
      const options = {
      method: "POST",
      headers:{"Content-Type": "application/json"},
      mode: "cors",
      data: req.body,
      url: "https://342abc3ea3ad89812aa71b65a444b40d.m.pipedream.net"
      }
    
      await axios(options)   
     
    res.status(200).end()
      
    }  
    });

module.exports = router