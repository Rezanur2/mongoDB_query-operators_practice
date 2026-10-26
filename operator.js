//  Equal Operator (eq)
db.jobs.find({location: "Dhaka"}).toArray()
db.jobs.find({location: {$eq: "Dhaka"}}).toArray()

//  Not Equal Operator (ne)
db.jobs.find({location: {$ne: "Dhaka"}}).toArray()

// Greater Than (gt)
db.jobs.find({salary: {$gt: 70000}})

// Greater Than or Equal (gte)
db.jobs.find({salary: {$gte: 70000}})

// Less Than (lt)
db.jobs.find({salary: {$lt: 50000}})

// Less Than (lte)
db.jobs.find({salary: {$lte: 50000}})

// multiple comparison operator 
db.jobs.find({
    salary:{ $gte: 50000, $lte: 90000}
})
