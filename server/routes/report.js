const express = require("express");
const dbo = require("../db/conn");

const reportRoutes = express.Router();
const ObjectId = require("mongodb").ObjectId;

reportRoutes.route('/create').post(function (req, response) {    
    const db = dbo.getDb();
    const newScoutingReport = {
        name: req.body.name,
        position: req.body.position,
        team: req.body.team,
        grade: req.body.grade,
        hit: req.body.hit,
        power: req.body.power,
        run: req.body.run,
        field: req.body.field,
        throw: req.body.throw,
        fastball: req.body.fastball,
        curveball: req.body.curveball,
        slider: req.body.slider,
        changeup: req.body.changeup,
        control: req.body.control,
        createdAt: req.body.createdAt
    };
    db
        .collection('reports')
        .insertOne(newScoutingReport, 
            function (err, res) {
                if (err) throw err;
                response.json(res);
            }
        );
});

reportRoutes.route('/browse').get(function (req, res) {
    const db = dbo.getDb();
    db
        .collection('reports')
        .find({})
        .sort({ createdAt: -1 })
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

reportRoutes.route('/delete/:id').post(function (req, res) {
    const db = dbo.getDb();
    db
        .collection('reports')
        .deleteOne(
            { _id: ObjectId(req.params.id) }, 
            function (err, result) {
                if (err) throw err;
                res.json(result);
            }
        );
});

reportRoutes.route('/update/:id').post(function (req, res) {
    const db = dbo.getDb();
    let update = req.body;
    delete update['_id'];
    db
        .collection('reports')
        .updateOne(
            { _id: ObjectId(req.params.id) }, 
            { $set: update }, 
            function (err, result) {
                if (err) throw err;
                res.json(result);
            }
        );
});

module.exports = reportRoutes;
