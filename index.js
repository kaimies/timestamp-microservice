const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({ unix: null, natural: null });
});

const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

app.get('/:time', (req, res) => {
    const time = req.params.time;
    
    const response = { unix: null, natural: null };
    const date = new Date(isNaN(time) ? time : Number(time * 1000));
    
    if (isNaN(date)) {
        return res.json(response);
    }
    
    response.natural =  monthList[date.getUTCMonth()] + ' ' + date.getUTCDate() + ', ' + date.getUTCFullYear();
    response.unix = date.getTime() / 1000;
    
    res.json(response);
});

const port = process.env.PORT || 8080;

app.listen(port);