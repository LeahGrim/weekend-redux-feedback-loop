const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
    pool.query('SELECT * FROM "feedback";')
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log("error GET /", error);
        res.sendStatus(500);
    });

});

router.post("/", (req, res) => {
   let feeling = req.body.feeling;
   let understanding = req.body.understanding;
   let support = req.body.support;
   let comments = req.body.comments;

   let queryText = `
   INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
   VALUES ($1, $2, $3, $4);`;
   
pool.query(queryText,[feeling, understanding, support, comments])
.then((result) => {
    res.sendStatus(201);
})
.catch(error => {
    console.log("error adding newFeedback", error);
    res.sendStatus(500);
});

});

module.exports = router;

