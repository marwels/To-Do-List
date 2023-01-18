const Task = function Task(title, description, dueDate, priority) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
};

const addTaskToProject = function addTaskToProject(newToDo, Project) {
  Project.push(Task);
};

const removeTaskFromProject = function removeTaskFromProject(
  ToDoToDelete,
  Project
) {
  const i = Project.findIndex((e) => e.Name === Task);
  if (i > -1) {
    Project.splice(i, 1);
  }
};

export { Task };
export { addTaskToProject };
export { removeTaskFromProject };
