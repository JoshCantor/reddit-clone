const express = require('express');

const app = express();
const port = 3000;

function handleSlashPath(req, res) {
  res.send('Hello World!')
  // return undefined
}

// when someone makes a GET request to '/', call handleSlashPath
app.get('/', handleSlashPath);

// takes two args: first is a port number and second is a callback
app.listen(port, () => console.log(`Reddit clone listening at http://localhost:${port}`));