// Create web server
// http://localhost:3000/comments

var express = require('express');
var app = express();

// http://localhost:3000/comments
app.get('/comments', function (req, res) {
  res.send('GET request to the homepage');
});

// http://localhost:3000/comments
app.post('/comments', function (req, res) {
  res.send('POST request to the homepage');
});

// http://localhost:3000/comments
app.put('/comments', function (req, res) {
  res.send('PUT request to the homepage');
});

// http://localhost:3000/comments
app.delete('/comments', function (req, res) {
  res.send('DELETE request to the homepage');
});

// http://localhost:3000/comments/123
app.get('/comments/:commentId', function (req, res) {
  res.send('GET request to the homepage');
});

// http://localhost:3000/comments/123
app.put('/comments/:commentId', function (req, res) {
  res.send('PUT request to the homepage');
});

// http://localhost:3000/comments/123
app.delete('/comments/:commentId', function (req, res) {
  res.send('DELETE request to the homepage');
});

// http://localhost:3000/comments/123/456
app.get('/comments/:commentId/:replyId', function (req, res) {
  res.send('GET request to the homepage');
});

// http://localhost:3000/comments/123/456
app.put('/comments/:commentId/:replyId', function (req, res) {
  res.send('PUT request to the homepage');
});

// http://localhost:3000/comments/123/456
app.delete('/comments/:commentId/:replyId', function (req, res) {
  res.send('DELETE request to the homepage');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});