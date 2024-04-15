const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const {database} = require('./src/db')

const PORT = 3001

const server = express()

const RouterAcronico = require('./src/routes')
server.use(cors({ origin: 'http://localhost:3000' }));
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(morgan('dev'));

server.use('/api', RouterAcronico)


database.sync({force:true}).then(()=>
server.listen(3001, () => {
  console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
})
)

