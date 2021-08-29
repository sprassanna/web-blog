import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const articleContents = {
   'learn-react':{
       upvotes:0,
       comments:[]
   },
   'daily-study':{
    upvotes:0,
    comments:[]
   },
   'book-read':{
    upvotes:0,
    comments:[]
   },
}

app.get('/api/hello',(req,resp)=> resp.send( 'Hello !!'));

app.post('/api/hello',(req,res) => {
    res
    .status(200)
    .send(`Hello ${req.body.name}!!`);
})

app.post('/api/article/:id/upvotes',(req,res) => {

    articleContents[req.params.id].upvotes +=1;
    res
    .status(200)
    .send(`
    Article : ${req.params.id}

    ${articleContents[req.params.id].upvotes}
    
    has upvotes
    
    `);
})

app.post('/api/article/:id/add-comment',(req,res) => {

    const {username, text} = req.body;
    articleContents[req.params.id].comments.push({username,text});
    
    res
    .status(200)
    .send(articleContents[req.params.id]);
})


app.listen(14000, ()=> console.log(`Listening on port 14000`));