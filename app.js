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
    console.log(phaseId)

    const options = {
    method: "POST",
    headers:{"Content-Type": "application/json"},
    mode: "cors",
    data: req.body.data,
    url: "https://eo3f12tkyr4r4wa.m.pipedream.net"
    }

    await axios(options)

});

app.listen(process.env.PORT || 3000, () => {
    console.log('listening on *:3000');
  });
  
