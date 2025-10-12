import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');


app.get("/", (req, res) => {
    res.render("home.ejs")
})

app.get("/trn", (req, res) => {
    res.render("index.ejs", {data: inputDetails || {}})
})

app.post("/details", (req, res) => {
    console.log(req.body);
    let inputDetails = req.body;
    res.render("index.ejs", {data: inputDetails})
})


app.listen(port, () => {
    console.log("server is running on port 3000")
})
