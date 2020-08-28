const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const keys = require('./config/keys');
const path = require('path');

mongoose.connect(keys.mongoURI);
const app = express()
app.use(bodyParser.json())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(cors())

app.use(require('connect-history-api-fallback')())
const admin = require('./routes/admin');
app.use('/api/', admin);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(__dirname + '/public/'));

  app.get('/.*/',(req,res) => {
     res.sendFile(path.join(__dirname,'public','index.html'));
  });
}
const PORT = process.env.PORT || 5000
app.listen(PORT, function() {
	console.log('Server is running on port: ' + PORT)
})