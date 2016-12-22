var express = require('express');

// create our app

var app = express();

var PORT = process.env.PORT || 9005;
// we need to use Public Folder
app.use(express.static('public'));

app.listen(port, function(){
  console.log(`Express Server is up on port: $(PORT)`);
});
