const express = require('express');
var proxy = require('http-proxy-middleware');
require('dotenv').config();


const app = express();
app.use(express.static('public'));

// app.use('/*/images', proxy({target:'http://localhost:8001/', changeOrigin:true}));

// app.use('/v1/product/*/images', proxy({target:'http://localhost:8001/', changeOrigin:true}));
// app.use('*shop*', proxy({target:'http://localhost:3009/', changeOrigin:true}));

// app.use('/fonts/*', proxy({target:'http://localhost:3003/', changeOrigin:true}));
app.listen(process.env.PORT, () =>   console.log(`listening on port: ${process.env.PORT}`))