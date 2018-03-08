const express = require('express');
var proxy = require('http-proxy-middleware');
const config = require('../configuration/index');
const log = require('../configuration/log')(module);

const PORT = 3000;
const app = express();
const router = express.Router();
app.use(express.static('public'));


app.use('*/images', proxy({target:'http://localhost:3003/', changeOrigin:true}));

app.use('/v1/product/*', proxy({target:'http://localhost:3004/', changeOrigin:true}));
app.use('*shop*', proxy({target:'http://localhost:3009/', changeOrigin:true}));

app.use('/fonts/*', proxy({target:'http://localhost:3003/', changeOrigin:true}));
app.set('port', config.get('port'));
app.listen(app.get('port'), () => {
  log.info(`listening on port: ${config.get('port')}`);
})