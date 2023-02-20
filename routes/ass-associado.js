const axios = require('axios')
const express = require("express")
const router = express.Router()
 
var date = ""

router.post('/ass-associado', async (req, res) => {
    date = new Date()    
    
    if(req.body.name == "Termo de Adesão à Associação Terapêutica"){
      
      console.log("[Ass Associado] Contrato Assinado por: "+req.body.signers[0].name+" - "+date)
         
      const options = {
      method: "POST",
      headers:{"Content-Type": "application/json"},
      mode: "cors",
      data: req.body,
      url: "https://74666ca595997168d919b1d16d3e6a61.m.pipedream.net"
      }
    
      await axios(options)   
     
    res.status(200).end()
      
    }  
});

module.exports = router