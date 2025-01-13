var express = require('express');
var router = express.Router();
const admin = require('firebase-admin');
var serviceAccount = require("../prhotel-9561c-firebase-adminsdk-a0vaf-149cf47fbc.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:'https://prhotel-9561c-default-rtdb.firebaseio.com/',
});

const db = admin.database();

/* GET services page. */
router.get('/', function(req, res) {
  res.render('contacts');
});

router.post('/enviar',(req,res) =>
  {
    console.log(req.body);
    const newContact = {
      name: req.body.name,
      email: req.body.email,
      asunto: req.body.subject, 
      mensaje: req.body.message
    };
    db.ref('contacts').push(newContact);
    res.send('recibido');
  }
  )

module.exports = router;