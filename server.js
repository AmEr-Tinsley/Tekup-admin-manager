const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const keys = require('./config/keys');
const path = require('path');

mongoose.connect(keys.mongoURI);
const app = express()
app.use(bodyParser.json())
app.use(cors())


const admin = require('./routes/admin');
app.use('/admin', admin);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('frontend/dist'))

  app.get('/.*/',(req,res) => {
     res.sendFile(path.join(__dirname,'frontend','dist','index.html'));
  });
}
const PORT = process.env.PORT || 5000
app.listen(PORT, function() {
	console.log('Server is running on port: ' + PORT)
})