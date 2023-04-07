const express = require('express'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/img/removebg', (req, res) => {
    let data = req.body;
    let getDomain = data.image.split('/');
    data.image = `${getDomain[0]}//${getDomain[2]}/images/dog_in_mountain_done.png`;
    res.json(data);
})



app.listen(3000);