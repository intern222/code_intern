import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/internships/:id', (req, res) =>{
    const internship = data.internships.find(x => x._id === req.params.id);
    if(internship){
        res.send(internship);
    }else {
        res.status(404).send({message:'Internship not found'});
    }
});

app.get('/api/internships', (req, res) =>{
    res.send(data.internships);
});

app.get('/', (req, res) =>{
    res.send('Server is ready');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});