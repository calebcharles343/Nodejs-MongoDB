const Job = require("../models/jobs");
// Get all Jobs => /api/v1/jobs
exports.getJobs = (req, res, next) => {
  res.status(200).json({
    success: true,
    // middlewareUser: req.user,
    requestMethod: req.requestMethod,
    message: "This route will display all jobs in future",
  });
};

// Create a new job => /api/v1/jobs/new
exports.newJob = async (req, res, next) => {
  // console.log("body", req.body);
  const job = await Job.create(req.body);
  res.status(200).json({
    success: true,
    message: "Job Created",
    data: job,
  });
};
