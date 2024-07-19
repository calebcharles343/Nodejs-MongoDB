const express = require("express");
const router = express.Router();

//////////////////////////////////////
// Importing jobs controler methods
//////////////////////////////////////
const { getJobs, newJob } = require("../controllers/jobsController");

router.route("/jobs").get(getJobs);
router.route("/jobs/new").post(newJob);

// router.get("/jobs", getJobs); : line is also valid

/*
// always make version for changes made so that previous data will be saved
//router.get("/api/v1/jobs", (req, res) => {: /api/v1 is remeved and added to app.use(jobs); in app.js
router.get("/jobs", (req, res) => {
  res.status(200).json({
    success: true,
    message: "This route will display all jobs in future",
  });
});
*/

module.exports = router;
