const express = require('express');
const morgan = require('morgan');
const path = require('path');
const PORT = process.env.PORT || 3000;
var proxy = require('http-proxy-middleware');
require('dotenv').config();

const cors = require('cors');
const app = express();
app.use(cors());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '/public')))

// app.use('/*/images', proxy({target:'http://localhost:8001/', changeOrigin:true}));


// app.use('/v1/product/*/images', proxy({target:'http://localhost:8001/', changeOrigin:true}));
// app.use('*shop*', proxy({target:'http://localhost:3009/', changeOrigin:true}));


// app.use('/fonts/*', proxy({target:'http://localhost:3003/', changeOrigin:true}));


// app.use('/fonts/*', proxy({target:'http://localhost:3003/', changeOrigin:true}));
app.listen(process.env.PORT, () =>   console.log(`listening on port: ${process.env.PORT}`))

