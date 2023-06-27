const axios = require('axios')
const express = require("express")
const router = express.Router()
 
var date = ""

router.post('/ass-parceiro', async (req, res) => {
    date = new Date()    
    
    if(req.body.name == "Termo de Adesão à Associação Terapêutica - Parceiros"){
      
      console.log("[Ass Parceiro] Contrato Assinado por: "+req.body.signers[0].name+" - "+date)
         
      const options = {
      method: "POST",
      headers:{"Content-Type": "application/json"},
      mode: "cors",
      data: req.body,
      url: "https://eo87f0al6gqai82.m.pipedream.net"
      }//
    
      await axios(options)   
      .catch(err => console.log(err))
     
    res.status(200).end()
      
    }  
});

module.exports = router