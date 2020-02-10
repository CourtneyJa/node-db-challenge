
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Task').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Task').insert([
        {
          description: "Sweep all hard floors in the house",
          notes: "only after wiping countertops",
          proj_id: 1
        },
        {
          description: "Mop all hard floors in the house",
          notes: "use natural disinfecting cleaner for baby's safety",
          proj_id: 1
        },
        {
          description: "Watch prep videos before each course",
          notes: "watch videos to understand the module",
          proj_id: 2
        },
        {
          description: "Take notes during lecture nights",
          notes: "write down questions you might have",
          proj_id: 2
        },
        {
          description: "Keep calm during testing",
          notes: "try not to freak out during timed tests",
          proj_id: 2
        },
        {
          description: "Stay active on LinkedIn",
          notes: "having an active account helps recruiters find you",
          proj_id: 3
        },
        {
          description: "Refactor portfolio",
          notes: "create a clean design, update projects and test for issues",
          proj_id: 3
        },
      ]);
    });
};
