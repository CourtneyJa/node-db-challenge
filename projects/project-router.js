const express = require("express");

const Projects = require("./project-model");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.getAllProjects()
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Projects.getProjects(id)
    .then(proj => {
      if (proj) {
        res.json(proj);
      } else {
        res
          .status(404)
          .json({ message: "Could not find a project with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

router.get("/:id/resources", (req, res) => {
  const { id } = req.params;

  Projects.getResources(id)
    .then(resource => {
      if (resource.length) {
        res.json(resource);
      } else {
        res
          .status(404)
          .json({ message: "Could not find resources for given project" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get resources" });
    });
});

router.get("/:id/tasks", (req, res) => {
  const { id } = req.params;

  Projects.getTasks(id)
    .then(task => {
      if (task.length) {
        res.json(task);
      } else {
        res
          .status(404)
          .json({ message: "Could not find tasks for given project" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get tasks" });
    });
});

router.post("/", (req, res) => {
  const projectData = req.body;

  Projects.addProject(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new project" });
    });
});

router.post("/:id/resource", (req, res) => {
  const resource = req.body;
  const { id } = req.params;

  Projects.getAllProjects(id)
    .then(() => {
      return Projects.addResource({
        project_id: id,
        resource_name: resource_name,
        description: resource.description
      }).then(() => {
        res.status(201).json(resource);
      });
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new resource" });
    });
});

router.post("/:id/task", (req, res) => {
  const task = req.body;
  const { id } = req.params.id;

  Projects.getAllProjects(id)
    .then(job => {
      return Projects.addTask({
        description: task.description,
        notes: task.notes,
        proj_id: id
      }).then(() => {
        res.status(201).json(task);
      });
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new task" });
    });
});

module.exports = router;
