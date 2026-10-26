db.jobs.find({salary: {$exists: false}})
// db.jobs.countDocuments()

// db.jobs.insertOne({
//   title: "Unpaid Intern",
//   company: "StartupXYZ",
//   location: "Dhaka",
//   experience: 0
// })


db.jobs.find(
    // {salary: {$type: "number"}},
    {skills: {$type: "array"}}
)