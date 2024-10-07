import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    requirements: [{ type: String }],
    jobType: {
      type: String,
      enum: ["Part-time", "Full-time", "Internship"],
      default: "Full-time",
      required: true,
    },
    location: { type: String },
    Salary: { type: Number, required: true },
    vacancy: {
      availableSeat: { type: Number },
      totalSeat: { type: Number, required: true },
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    recruiter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    applications: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Application",
    },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);
export default Job;