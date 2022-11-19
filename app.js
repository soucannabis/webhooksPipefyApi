const express = require('express');
const axios = require('axios')
const app = express();
var phaseId = []

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.post('/pipe-pedidos', async (req, res) => {

  phaseId = req.body.data.to.id

  if(phaseId == "310523364"){
    
    console.log(req.body.data)

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

});

app.post('/pipe-associados', async (req, res) => {
  
  console.log(req.body.data)

  phaseId = req.body.data.to.id

  if(phaseId == "316891688"){
    
    console.log(req.body.data)

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
  
  console.log(req.body.data)

  phaseId = req.body.data.to.id

  if(phaseId == "311283175"){
    
    console.log(req.body.data)

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

app.listen(process.env.PORT || 3000, () => {
    console.log('listening on *:3000');
  });
  
