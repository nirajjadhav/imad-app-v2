var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
  'article-one' :{
  title: 'Article-one NIRAJ JADHAV',
  heading: 'Article-one',
  date: 'sep 5, 2016',
  content: `
          <p>
             This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
         </p>
          <p>
             This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
         </p>
         <p>
             This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
         </p>`
  
  },
  'article-two' : { title: 'Article-two NIRAJ JADHAV',
  heading: 'Article-two',
  date: 'sep 10, 2016',
  content: `
          <p>
             This is the content for my second article.
         </p>`},
  'articlet-three': {title: 'Article-three NIRAJ JADHAV',
  heading: 'Article-three',
  date: 'sep 15, 2016',
  content: `
          <p>
             This is the content for my third article.
          </p>`}
};


function createtemplate (data) {
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;

var htmltemplate = `
<html>
  <head>
      <title>
        ${title} 
      </title>
      <meta name="viewport" content="width-device-width, intial-scale=1"/>
      <link href="/ui/style.css" rel="stylesheet" />
      
  </head>
  <body>
      <div class='container'>
     <div>
         <a href = "/" >Home</a>
     </div> 
     <hr/>
     <h3>
         ${heading}     
     </h3>
     <div>
         ${date}
     </div>
     <div>
         ${content}
     </div>
     </div>
  </body>
    
    
</html>

`;
return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter', function(req, res) {
    counter = counter+1;
    res.send(counter.toString());
});
app.get(':articlename', function (req, res) {
    var articlename = req.params.articlename;
 res.send(createtemplate(articles[articlename]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
