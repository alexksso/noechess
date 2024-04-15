const express = require('express')
const app = express()
const port = 3000

app.get('*', (req, res) => {
  res.redirect('https://lu.ma/noecafechess');
});

app.listen(port, () => {
  console.log(`Redirect app listening on port ${port}`)
})