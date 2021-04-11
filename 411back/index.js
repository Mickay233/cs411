const express = require('express');
const app = express();

var db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'Zyf123456',
    database:'db_pc',
   })

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/get", (require, response) => {
    const sqlSelect = "SELECT * FROM db_pc";
    db.query(sqlSelect, (err, result) => {
        response.send(result);
    });
});

app.listen(3002, () => {
    console.log("running on port 3002");
})
