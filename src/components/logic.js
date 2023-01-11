// let projectsListL = [];

// function Project(nameOfTheProject) {
//   this.nameOfTheProject = nameOfTheProject;
// }

// function addToProjectListL(nameOfTheProject) {
//   projectsListL += nameOfTheProject;
// }

// function deleteFromProjectListL(nameOfTheProject) {
//   const i = projectsListL.findIndex((e) => e.Name === nameOfTheProject);
//   if (i > -1) {
//     projectsListL.splice(i, 1);
//   }
// }

// function ToDo(title, description, dueDate, priority) {
//   this.title = title;
//   this.description = description;
//   this.dueDate = dueDate;
//   this.priority = priority;
// }
// function addToDoToProject(ToDo, Project) {
//   Project.push(ToDo);
// }

// function removeToDoFromProject(ToDo, Project) {
//   const i = Project.findIndex((e) => e.Name === ToDo);
//   if (i > -1) {
//     Project.splice(i, 1);
//   }
// }

// function showAllToDosInAProject(Project, targetEl) {
//   Project.forEach((element) => {
//     const ToDoContainer = document.createElement("div");
//     const title = document.createElement("div");
//     title.innerText = element.title;
//     const decription = document.createElement("div");
//     decription.innerText = element.decription;
//     const dueDate = document.createElement("div");
//     dueDate.innerText = element.dueDate;
//     const priority = document.createElement("div");
//     // some if statement
//     ToDoContainer.appendChild(title);
//     ToDoContainer.appendChild(decription);
//     ToDoContainer.appendChild(dueDate);
//     ToDoContainer.appendChild(priority);
//     targetEl.appendChild(ToDoContainer);
//   });
// }

// function showAllToDos(projectsListL, targetEl) {
//   projectsListL.forEach((element) => {
//     showAllToDosInAProject(element, targetEl);
//   });
// }
