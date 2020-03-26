const express = require("express");

const router = express.Router();

const burger = require("../models/burger");

router.get("/", (req,res)=> {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

module.exports = router;