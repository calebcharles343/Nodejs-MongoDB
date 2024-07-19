const mongoose = require("mongoose");
const validator = require("validator");
const slugify = require("slugify");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter jobs title."],
    trim: true,
    maxlength: [100, "Job title can not exceed 100 characters"],
  },

  slug: String,

  description: {
    type: String,
    required: [true, "Please enter jobs description."],
    maxlength: [1000, "Job description can not exceed 1000 characters"],
  },

  email: {
    type: String,
    validate: [validator.isEmail, "Please add a valid email address"],
  },

  address: {
    type: String,
    required: [true, "Please add an address"],
  },

  company: {
    type: String,
    required: [true, "Please add company name"],
  },

  industry: {
    type: [String],
    required: true,
    enum: {
      values: [
        "Business",
        "Information Technology",
        "Banking",
        "Education/Training",
        "Telecommunication",
        "Other",
      ],
      message: "Please select the correct options for industry",
    },
  },

  jobType: {
    type: String,
    required: true,
    enum: {
      values: ["Permanent", "Temporary", "Internship"],
      message: "Please select the correct option for job Type",
    },
  },

  minEducation: {
    type: String,
    required: true,
    enum: {
      values: ["Bachelors", "Masters", "Phd"],
      message: "Please select the correct option for Education",
    },
  },

  positons: {
    type: Number,
    default: 1,
  },

  experience: {
    type: String,
    required: true,
    enum: {
      values: [
        "No Experience",
        "1 Year - 2 Years",
        "2 Year - 3 Years",
        "5 years+",
      ],
      message: "Please select the correct option for experience",
    },
  },

  salary: {
    type: Number,
    required: [true, "Please enter expected salary for this job"],
  },

  postingDate: {
    type: Date,
    default: Date.now,
  },

  lastDate: {
    type: Date,
    default: new Date().setDate(new Date().getDate() + 7), /////////??????
  },

  applicantsApplied: {
    type: [Object],
    select: false,
  },
});

// Creating Job Slug before saving
jobSchema.pre("save", function (next) {
  // using function declarations to access 'this keyword'
  this.slug = slugify(this.title, { lower: true }); // the this meaning the job object is about creating
  next();
});

module.exports = mongoose.model("job", jobSchema);
