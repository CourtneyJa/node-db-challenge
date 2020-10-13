exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Resource")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("Resource").insert([
        {
          resource_name: "broom",
          description: "to sweep rooms",
          project_id: 1
        },
        { resource_name: "mop", description: "to mop rooms", project_id: 1 },
        {
          resource_name: "notebook",
          description: "to take great notes",
          project_id: 2
        },
        {
          resource_name: "pen",
          description: "to write great notes",
          project_id: 2
        },
        {
          resource_name: "LinkedIn",
          description: "to make valuable connections",
          project_id: 3
        },
        {
          resource_name: "Portfolio",
          description: "to dazzle recruiters and hiring managers",
          project_id: 3
        }
      ]);
    });
};
