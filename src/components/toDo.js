const ToDo = function ToDo(title, description, dueDate, priority) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
};

const addToDoToProject = function addToDoToProject(newToDo, Project) {
  Project.push(ToDo);
};

const removeToDoFromProject = function removeToDoFromProject(
  ToDoToDelete,
  Project
) {
  const i = Project.findIndex((e) => e.Name === ToDo);
  if (i > -1) {
    Project.splice(i, 1);
  }
};

export { ToDo };
export { addToDoToProject };
export { removeToDoFromProject };
