import AddTaskForm from "./AddTaskForm";

const singleProjectPage = function singleProjectPage(
  targetEl,
  projects,
  projectId,
  onAddTask
) {
  const singleProjectPageContainer = document.createElement("div");
  singleProjectPageContainer.className = "singleProjectPageContainer";
  const project = projects.get(projectId);

  if (!project) {
    console.log("Project not found");
  } else {
    console.log(projects, project, projectId);

    const pageTitle = document.createElement("h1");
    pageTitle.className = `pageTitle ${project.name}`;
    pageTitle.innerText = `Project: ${project.name}`;
    singleProjectPageContainer.appendChild(pageTitle);

    AddTaskForm(singleProjectPageContainer, project, projectId, onAddTask);

    const listOfTasks = document.createElement("div");
    listOfTasks.className = "listOfToTasks";

    // all Tasks
    project.tasks.forEach((task, taskId) => {
      const singleTaskContainer = document.createElement("div");
      singleTaskContainer.className = "singleTaskContainer";
      singleTaskContainer.dataset.taskName = task.name;

      const singleTaskPriority = document.createElement("div");
      singleTaskPriority.className = "singleTaskNameDiv";

      if (task.priority === 1) {
        singleTaskPriority.classList.add("green");
      } else if (task.priority === 2) {
        singleTaskPriority.classList.add("orange");
      } else if (task.priority === 3) {
        singleTaskPriority.classList.add("red");
      } else {
        console.log("check priority");
      }
      singleTaskContainer.appendChild(singleTaskPriority);

      const singleTaskNameDiv = document.createElement("div");
      singleTaskNameDiv.className = "singleTaskNameDiv";
      singleTaskNameDiv.innerText = task.name;
      singleTaskContainer.appendChild(singleTaskNameDiv);

      const singleTaskDescription = document.createElement("div");
      singleTaskDescription.className = "singleTaskDescription";
      singleTaskDescription.innerText = task.description;
      singleTaskContainer.appendChild(singleTaskDescription);

      const singleTaskDate = document.createElement("div");
      singleTaskDate.className = "singleTaskDate";
      singleTaskDate.innerText = task.date;
      singleTaskContainer.appendChild(singleTaskDate);

      const singleTaskStatus = document.createElement("input");
      singleTaskStatus.className = "singleTaskStatus";
      singleTaskStatus.setAttribute("type", "checkbox");
      singleTaskContainer.appendChild(singleTaskStatus);

      listOfTasks.appendChild(singleTaskContainer);
    });
    singleProjectPageContainer.appendChild(listOfTasks);
  }

  targetEl.appendChild(singleProjectPageContainer);

  return () => {
    targetEl.removeChild(singleProjectPageContainer);
  };
};

export default singleProjectPage;
