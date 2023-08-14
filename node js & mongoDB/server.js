const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));

app.listen(8080, function(){
    console.log('listening on 8080')
});

app.get('/route', function(req, rps){
   rps.send('펫 용품 쇼핑할 수 있는 페이지입니다.');
});
app.get('/beauty', function(req, rps){
   rps.send('뷰티 용품 쇼핑할 수 있는 페이지입니다.');
});
app.get('/', function(req, rps){
   rps.sendFile(__dirname + '/index.html');
});
app.get('/write', function(req, rps){
   rps.sendFile(__dirname + '/write.html');
});

app.post('/add', function(req, rps){
    rps.send('complete')
    console.log(req.body.title)
    console.log(req.body.date)
    
});
