const express = require("express");
const app = express();
const db = require("./config/db.js");
const cors = require("cors");

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/programs", async (req, res) => {
  var programs_qry = `SELECT programId as pid,programName as pname,speed,temp FROM programs where status ='active'`;

  try {
    let [programs, pgm_field] = await db.query(programs_qry);
    programData = programs;
    res.json({ data: programData });
  } catch (err) {
    console.log(err);
    res.send({ status: "error", msg: "Error in Program table" });
  }

  //res.json(data);
});

app.get("/userStats", async (req, res) => {
  var stats_qry = `SELECT p.programId as pid,s.question,p.programName,s.temp,s.speed,s.extraWash,(s.programStats) as totalStats  FROM programStats as s left join programs as p on s.program = p.programId`;

  try {
    let [stats, pgm_field] = await db.query(stats_qry);

    res.json({ data: stats });
  } catch (err) {
    console.log(err);
    res.send({ status: "error", msg: "Error in Program stats table" });
  }

  //res.json(data);
});

app.get("/userTransactions", async (req, res) => {
  var stats_qry = `SELECT * from transaction order by 1 desc`;

  try {
    let [stats, pgm_field] = await db.query(stats_qry);

    res.json({ data: stats });
  } catch (err) {
    console.log(err);
    res.send({ status: "error", msg: "Error in transaction stats table" });
  }

  //res.json(data);
});

app.post("/saveTransaction", async function (req, res, next) {
  // console.log(req.body);

  try {
    // const data = JSON.stringify(req.body);
    const { data } = req.body;

    let date_ob = new Date();

    // current date
    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);

    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    // current year
    let year = date_ob.getFullYear();

    // current hours
    let hours = date_ob.getHours();

    // current minutes
    let minutes = date_ob.getMinutes();

    // current seconds
    let seconds = date_ob.getSeconds();

    // prints date in YYYY-MM-DD format
    console.log(year + "-" + month + "-" + date);

    // prints date & time in YYYY-MM-DD HH:MM:SS format
    console.log(
      year +
        "-" +
        month +
        "-" +
        date +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds
    );

    const d =
      year +
      "-" +
      month +
      "-" +
      date +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds;

    for (const val of data) {
      var obj = JSON.stringify(val);

      let pgm_sql =
        "INSERT INTO transaction ( program,speed,temp,question,extraWash,activity,createdDate) VALUES (?,?,?,?,?,?,?)";
      var results = await db.query(pgm_sql, [
        val.program,
        val.speed,
        val.temparature,
        val.question,
        val.extras,
        obj,
        d,
      ]);

      try {
        var inpu = [val.question, val.program, val.speed, val.temparature];
        if (
          val.extras == "NULL" ||
          val.extras == "" ||
          val.extras == undefined
        ) {
          val.extras = "NONE";
          //var stats_qry = `SELECT * FROM programStats where question = ?  and program = ? and speed = ? and temp = ? and extraWash IS NULL`;
        }
        inpu.push(val.extras);
        var stats_qry = `SELECT * FROM programStats where question = ?  and program = ? and speed = ? and temp = ? and extraWash = ?`;

        let [stats, pgm_field] = await db.query(stats_qry, inpu);
        console.log(stats);

        if (stats.length == 0) {
          let pgmstat_sql =
            "INSERT INTO programStats ( program,question,temp,speed,extraWash,programStats) VALUES (?,?,?,?,?,?)";
          await db.query(pgmstat_sql, [
            val.program,
            val.question,
            val.temparature,
            val.speed,
            val.extras,
            1,
          ]);
        } else {
          let pgmstat_sql =
            "UPDATE programStats set programStats = programStats + 1  WHERE  stateId = ?";
          await db.query(pgmstat_sql, [stats[0].stateId]);
        }
        //res.json({ data: stats });
      } catch (err) {
        console.log(err);
        //  res.send({ status: "error", msg: "Error in Program table" });
      }
    }

    res.json({ status: 200 });
  } catch (error) {
    console.log("helloooo", error);
  }
});

var port = process.env.PORT || "3005";

app.listen(port, () => {
  console.log("app is running");
});
