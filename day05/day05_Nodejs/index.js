const express = require('express')
const app = express()
const port = 3000

const carList = [];
let cnt = 1;
app.get('/car/input', (req, res) => {
    var car_name = req.query.name;

    
    req.query.no =cnt++;
    carList.push(req.query);
    
    res.send(carList);
    cnt++;
})

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})