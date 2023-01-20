import AddTaskForm from "./AddTaskForm";

const singleProjectPage = function singleProjectPage(
  targetEl,
  projects,
  projectId,
  onAddTask,
  onDeleteTask
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
    listOfTasks.className = "listOfTasks";
    const listOfTasksTitle = document.createElement("h3");
    listOfTasksTitle.className = "listOfTasksTitle";
    listOfTasksTitle.innerText = "Tasks List";
    listOfTasks.appendChild(listOfTasksTitle);

    const listOfTasksFirstRow = document.createElement("div");
    listOfTasksFirstRow.className = "listOfTasksFirstRow";

    const listOfTasksFirstRowDone = document.createElement("div");
    listOfTasksFirstRowDone.className = "listOfTasksFirstRowDone";
    listOfTasksFirstRowDone.innerText = "Done";
    listOfTasksFirstRow.appendChild(listOfTasksFirstRowDone);

    const listOfTasksFirstRowPriority = document.createElement("div");
    listOfTasksFirstRowPriority.className = "listOfTasksFirstRowPriority";
    listOfTasksFirstRowPriority.innerText = "Priority";
    listOfTasksFirstRow.appendChild(listOfTasksFirstRowPriority);

    const listOfTasksFirstRowTask = document.createElement("div");
    listOfTasksFirstRowTask.className = "listOfTasksFirstRowTask";
    listOfTasksFirstRowTask.innerText = "Task";
    listOfTasksFirstRow.appendChild(listOfTasksFirstRowTask);

    const listOfTasksFirstRowDescription = document.createElement("div");
    listOfTasksFirstRowDescription.className = "listOfTasksFirstRowDescription";
    listOfTasksFirstRowDescription.innerText = "Description";
    listOfTasksFirstRow.appendChild(listOfTasksFirstRowDescription);

    const listOfTasksFirstRowDate = document.createElement("div");
    listOfTasksFirstRowDate.className = "listOfTasksFirstRowDate";
    listOfTasksFirstRowDate.innerText = "Date";
    listOfTasksFirstRow.appendChild(listOfTasksFirstRowDate);

    const listOfTasksFirstRowDelete = document.createElement("div");
    listOfTasksFirstRowDelete.className = "listOfTasksFirstRowDelete";
    listOfTasksFirstRowDelete.innerText = "Delete";
    listOfTasksFirstRow.appendChild(listOfTasksFirstRowDelete);

    listOfTasks.appendChild(listOfTasksFirstRow);

    // all Tasks
    project.tasks.forEach((task, taskId) => {
      const singleTaskContainer = document.createElement("div");
      singleTaskContainer.className = "singleTaskContainer";
      singleTaskContainer.dataset.taskName = task.name;

      const singleTaskStatus = document.createElement("input");
      singleTaskStatus.className = "singleTaskStatus";
      singleTaskStatus.setAttribute("type", "checkbox");
      singleTaskContainer.appendChild(singleTaskStatus);

      const singleTaskPriority = document.createElement("div");
      singleTaskPriority.className = "singleTaskPriority";

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

      const singleTaskBin = document.createElement("button");
      singleTaskBin.className = "singleTaskBin material-symbols-outlined";
      singleTaskBin.innerText = "delete";
      singleTaskBin.addEventListener("click", () => {
        onDeleteTask(taskId);
      });
      singleTaskContainer.appendChild(singleTaskBin);

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
