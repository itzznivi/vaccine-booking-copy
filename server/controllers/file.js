const express = require('express');
const db = require('../Database/Mysql');

const test=(req,res)=>{
    res.json("backend working");
}

const getDetails = (req, res) => {
    let sql = "SELECT * From admin_side";
    try {
        db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
            // console.log(results);
        })
    } catch (error) {
        console.log(error);
    }
}


const addData = (req,res) => {
    const data = req.body;
    console.log(data);
    let sql = "INSERT INTO admin_side (name,location,slots) VALUES (?,?,?)";
    const values = [data.name, data.location, data.slots];
    db.query(sql, values, (err) => {
        if (err) {
            console.log(err);
            return res.json("Unsuccessful DB insert");
        } 
        console.log("Record added to DB");
        res.json("Record added to DB");
    });
}

const deleteRecord = (req, res) => {
    let sql = "DELETE From admin_side WHERE id = ?";
    const id = req.body.id;
    try {
        db.query(sql, id, (err) => {
            if (err) throw err;
            res.json("Record Deleted Successfully");
            console.log("Record Deleted Successfully");
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    test,
    addData,
    getDetails,
    deleteRecord
}