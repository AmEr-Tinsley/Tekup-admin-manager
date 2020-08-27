const express = require('express')
const admin = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const Admin = require('../models/admin')
admin.use(cors())

process.env.SECRET_KEY = 'secret'


admin.post('/login', (req, res) => {
  Admin.findOne({
    username: req.body.username
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          // Passwords match
          const payload = {
            _id: user._id,
            username: user.username
          }
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        } else {
          // Passwords don't match
          res.json({ error: 'Admin does not exist' })
        }
      } else {
        res.json({ error: 'Admin does not exist' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})


module.exports = admin