const express = require("express")
const path = require('path')
const app = express();

app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap')))
app.use('/fontawesome', express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free')))
app.use('/css', express.static(path.join(__dirname, 'public/css')))
app.use('/js', express.static(path.join(__dirname, 'public/js')))
app.use('/img', express.static(path.join(__dirname, 'public/img')))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
  });

app.listen(8000, () => {
  console.log('Server running on http://localhost:' + 8000);
});
