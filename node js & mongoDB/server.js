const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const MongoClient = require('mongodb').MongoClient;
app.set('view engine', 'ejs');

var db;
MongoClient.connect('mongodb+srv://kcw:pw@kang.q9xpuvh.mongodb.net/?retryWrites=true&w=majority', function (에러, client) {
   if (에러) return console.log(에러)

   db = client.db('todoapp');

   // db.collection('post').insertOne({이름 : 'john', _id : 100}, function(에러, 결과){
   //    console.log('저장완료');
   // });

   app.listen(8080, function () {
      console.log('listening on 8080')
   });

   
})



app.get('/route', function (req, res) {
   res.send('펫 용품 쇼핑할 수 있는 페이지입니다.');
});
app.get('/beauty', function (req, res) {
   res.send('뷰티 용품 쇼핑할 수 있는 페이지입니다.');
});
app.get('/', function (req, res) {
   res.sendFile(__dirname + '/index.html');
});
app.get('/write', function (req, res) {
   res.sendFile(__dirname + '/write.html');
});

app.post('/add', function (req, res) {
   db.collection('post').insertOne({title : req.body.title, date : req.body.date}, function(에러, 결과){
      console.log('저장완료');
   });
});

app.get('/list', function(req,res) {
   db.collection('post').find().toArray(function(err,result){
      console.log(result)
      res.render('list.ejs', {posts : result});
   });
})
