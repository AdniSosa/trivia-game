import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://opentdb.com/api.php?amount=1";

app.use(express.static("public"));

app.get("/", (req, res) => {
    
    res.render("index.ejs");
  
  });

  app.get("/question", async (req, res) => {
    try {
        const response = await axios.get("https://opentdb.com/api.php?amount=1");
        const result = response.data;
    res.render("index.ejs", { data: result });
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    };
  });


  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });