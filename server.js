const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.get('/api/hello' , (req, res) => {
//     res.send({message: 'Hello Express!'})
// })

app.get('/api/customers', (req,res) => {
    res.send([
        {
            id : 1,
            img : 'https://placeimg.com/64/64/1', 
            name : '김진혁1',
            birthday : '811018',
            gender : '남자',
            job : '퍼블리셔'
        },
        {
            id : 2,
            img : 'https://placeimg.com/64/64/2', 
            name : '김진혁2',
            birthday : '811018',
            gender : '남자',
            job : '퍼블리셔'
        },
        {
            id : 3,
            img : 'https://placeimg.com/64/64/3', 
            name : '김진혁3',
            birthday : '811018',
            gender : '남자',
            job : '퍼블리셔'
        }
    ])
})

app.listen(port, () => console.log(`Listening on port ${port}`));