const express = require("express");
const dbo = require("../db/conn");

const reportRoutes = express.Router();


reportRoutes.route('/create').post(function (req, response) {
    console.log(req.body)
    
    let db = dbo.getDb();
    const newScoutingReport = {
        name: req.body.name,
        position: req.body.position,
        team: req.body.team,
        grade: req.body.grade,
        hit: req.body.hit,
        power: req.body.power,
        run: req.body.run,
        field: req.body.field,
        _throw: req.body._throw,
        fastball: req.body.fastball,
        curveball: req.body.curveball,
        slider: req.body.slider,
        changeup: req.body.changeup,
        control: req.body.control,
        createdAt: req.body.createdAt
    };
    db.collection("reports").insertOne(newScoutingReport, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
});

reportRoutes.route('/browse').get(function (req, res) {
    let db_connect = dbo.getDb('ScoutingReportDatabase-dev');
    db_connect
        .collection('reports')
        .find({})
        .sort({ createdAt: -1 })
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
    });
});

module.exports = reportRoutes;
