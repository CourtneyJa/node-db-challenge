
exports.seed = function(knex) {
  return knex('Project').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Project').insert([
        {project_name: 'Clean house', description: "clean various rooms in the house"},
        {project_name: 'Pass Lambda', description: "study hard, take notes, pass challenges"},
        {project_name: 'Get a tech job', description: "find a great job in tech"},
      ]);
    });
};
