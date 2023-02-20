const axios = require('axios')
const express = require("express")
const router = express.Router()

var date = ""

router.post('/ass-consentimento', async (req, res) => {
    date = new Date()  
  
    if(req.body.name == "Termo de Consentimento Livre e Esclarecido"){
      
      console.log("[Ass Consentimento] Contrato Assinado por: "+req.body.signers[0].name+" - "+date)
         
      const options = {
      method: "POST",
      headers:{"Content-Type": "application/json"},
      mode: "cors",
      data: req.body,
      url: "https://7c0371a03fb5af983f9cd0ec38567d4c.m.pipedream.net"
      }
    
      await axios(options)   
     
    res.status(200).end()
      
    }  
    });



module.exports = router