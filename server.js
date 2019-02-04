const express = require('express'),
  bodyParser = require('body-parser'),
  usersCtrl = require('./usersCtrl'),
  app = express();

app.use(bodyParser.json());

app.get('/api/user', usersCtrl.getUser);
app.get('/api/user/:userId', usersCtrl.getUserById);
app.get('/api/admin', usersCtrl.getAdmins);
app.get('/api/nonadmin', usersCtrl.getNonAdmins);
app.get('/api/type/:userType', usersCtrl.getUserType);
app.put('/api/user/:userId', usersCtrl.updateUser);
app.post('/api/user', usersCtrl.createUser);
app.delete('/api/user/:userId', usersCtrl.deleteUser);

app.listen(3000, function() {
  console.log('Listening on Port 3000');
});
