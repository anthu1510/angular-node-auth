const express = require("express");
const hash = require('password-hash');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Database connection config file access
const db = require("../config/db_config");

router.get("/", (req, res) => {
  res.send("Get method Worked.....");
});

router.post('/login', (req, res) => {
  const sql = "SELECT * FROM users WHERE email = '"+ req.body.username +"'";
  db.query(sql, (err, result) => {
      if(err) throw err;
      const pass = hash.verify(req.body.password,result[0].password);
       if(pass === false) throw res.send('please Check the password');
       const payload = {id: result[0].user_id, name: result[0].name};
       const token = jwt.sign(payload, 'secretkey');
       res.send({token});
  });
});

router.post("/", (req, res) => {
  res.send("Post method Worked.....");
});

router.put("/", (req, res) => {
  res.send("Put method Worked.....");
});

router.delete("/", (req, res) => {
  res.send("Delete method Worked.....");
});

router.patch("/", (req, res) => {
  res.send("Patch method Worked.....");
});

module.exports = router;
