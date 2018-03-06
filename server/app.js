const express = require('express');
var proxy = require('http-proxy-middleware');


const PORT = 3000;
const app = express();
app.use(express.static('public'));

app.use('/v1/*', proxy({target:'http://localhost:3003/', changeOrigin:true}));
app.use('/fonts/*', proxy({target:'http://localhost:3003/', changeOrigin:true}));
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
})