// In operator (at least one value match)

db.jobs.find({skills: {$in: ["Python", "JavaScript"]}
})

// Not In Operator

db.jobs.find({
    skills: {$nin:["Python", "JavaScript"]}
})


// All Operator 
db.jobs.find({
    skills: {$all: ["Python", "SQL"]}
})


// Size Operator 
db.jobs.find({
    skills: {$size:3}
})