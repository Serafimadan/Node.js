const fs = require("fs"); 
const express = require('express')
const app = express();
app.use(express.json());

// YOUR CODE GOES IN HERE
// GET - READ /blogs
// POST - CREATE /blogs
// UPDATE - PUT /posts/:id
// DELETE - DELETE /blogs/:id
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
// Creating new posts
app.post('/blogs', (req, res) => {
  let title = req.body.title;
  let content = req.body.content;
  res.writeHead(200, "OK", {'Content-Type': 'application/json'});
  fs.writeFileSync(title, content);
  res.end('ok')
})
// Updating existing posts
app.put('/posts/:title', (req, res) => {
  // How to get the title and content from the request?
  let title = req.params.title;
  let content = req.body.content;
  if (fs.existsSync(title)) {
    res.writeHead(200, "OK", {'Content-Type': 'application/json'});
    fs.writeFileSync(title, content);
    res.end('ok')
  }
  else {
    // Send response with error message
    res.status(400).end('This post does not exist!');
  }
})
// Deleting posts
app.delete('/blogs/:title', (req, res) => {
  // How to get the title from the url parameters?
  let title = req.params.title;
  if (fs.existsSync(title)) { 
    fs.unlinkSync(title);
    res.end('ok');
  } else {
    // Respond with message here
    res.status(400).end('This post does not exist!');
  }
})
// Reading posts
app.get('/blogs/:title', (req, res) => {
  // How to get the title from the url parameters?
  let title = req.params.title;
  // check if post exists
  if (fs.existsSync(title)) { 
    const post = fs.readFileSync(title);
    res.end(post);
  } else {
    res.status(400).end('This post does not exist!');
  }
})

// bonus
app.get('/blogs', (req, res) => {
  // how to get the file names of all files in a folder??
  const folder = './blogs';
  fs.readdir(folder, { withFileTypes: true }, (err, files) => {
    let title = req.params.title;
    if (fs.existsSync(folder)) { 
      files = files.map(file => {
        return file;
      }); 
      res.end(JSON.stringify(files));
    } else {
      res.status(400).end(err);
    }
  })
})

app.listen(3000)
