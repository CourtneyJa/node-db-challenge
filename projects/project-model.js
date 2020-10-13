const db = require("../data/dbConfig");

module.exports = {
  getProjects,
  getAllProjects,
  getResources,
  getTasks,
  addProject,
  addResource,
  addTask
};

//find all projects
function getAllProjects() {
  return db("project");
}

//find projects by id
function getProjects(id) {
  return db("project")
    .where({ id })
    .first();
}

//find all project resources
// function getResources(project_id) {
//   return db("project")
//     .select("r.id", "r.name", "r.description")
//     .join("resource as r", "project.id", "r.project_id")
//     .where("r.project_id", project_id);
// }
function getResources(){
  return db(resource)
}

//find all project tasks
function getTasks(project_id) {
  return db("project as p")
    .select(
      "p.name",
      "p.description",
      "t.description",
      "t.notes",
      "t.completed"
    )
    .join("task as t", "p.id", "t.proj_id")
    .where("t.proj_id", project_id);
}

//add a project
function addProject(project) {
  return db("project")
    .insert(project)
    .then(ids => {
      const [id] = ids;
      return getProjects(id);
    });
}

//add a resource
function addResource(resource) {
  return db("resource")
    .insert(resource)
    .then(ids => {
      const [id] = ids;
      return db("project")
        .where({ id })
        .first();
    });
}

//add a task
function addTask(task) {
  return db("task")
    .insert(task)
    .then(ids => {
      const [id] = ids;
      return db("task")
        .where({ id })
        .first();
    });
}
