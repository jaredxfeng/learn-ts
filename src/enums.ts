enum Priority {
    Lowest = 0,
    Low = 1,
    Medium = 2,
    High = 3,
    Urgent = 4,
}

function addTicket(details: string, priority: Priority) {
    console.log(`Added ticket with priority ${priority}: ${details}`);
}

// use enum to provide context and increase readability
addTicket('fix now!', Priority.High);
// out: Added ticket with priority 3: fix now!