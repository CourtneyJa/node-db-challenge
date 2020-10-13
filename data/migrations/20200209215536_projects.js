exports.up = function(knex) {
  return knex.schema
    .createTable("Project", tbl => {
      tbl.increments();
      tbl
        .string("project_name", 300)
        .unique()
        .notNullable();
      tbl.string("description", 400).notNullable();
      tbl
        .boolean("completed")
        .defaultTo(false)
        .notNullable();
    })
    .createTable("Resource", tbl => {
      tbl.increments();

      tbl
        .string("resource_name", 300)
        .unique()
        .notNullable();

      tbl.string("description", 400).notNullable();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("Project")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("Task", tbl => {
      tbl.increments();

      tbl
        .string("description", 400)
        .notNullable()
        .unique();
      tbl.string("notes", 400);
      tbl
        .boolean("completed")
        .defaultTo(false)
        .notNullable();
      tbl
        .integer("proj_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("Project")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("Project")
    .dropTableIfExists("Resource")
    .dropTableIfExists("Task");
};
