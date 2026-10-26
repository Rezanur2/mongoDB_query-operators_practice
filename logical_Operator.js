// Logical  
// And Operator 
db.jobs.find({
    $and: [
        {location: "Dhaka"},
        {salary: {$gt: 70000}},
        {experience: 3}
        ]
})

// Or Operator 
db.jobs.find({
    $or:[
            {salary: {gt: 100000}},
            {isRemote: true}
        ]
})


db.jobs.find({
  $or: [
    { location: "Dhaka" },
    { location: "Chittagong" }
  ]
})

// Not Operator 
db.jobs.find({
    salary: {$not: {$gt: 50000}}
})


// Nor Operator 
db.jobs.find({
    $nor: [
            {location: "Dhaka"},
            {isRemote: true}
        ]
})