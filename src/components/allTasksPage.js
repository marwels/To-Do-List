const allTasksPage = function allTasksPage(targetEl, projects) {
  const AllTasksPageContainer = document.createElement("div");
  AllTasksPageContainer.className = "AllTasksPageContainer";

  const pageTitle = document.createElement("h1");
  pageTitle.innerText = "All Tasks";
  AllTasksPageContainer.appendChild(pageTitle);

  const allTasksFirstRow = document.createElement("div");
  allTasksFirstRow.className = "allTasksFirstRow";

  const allTasksFirstRowProject = document.createElement("div");
  allTasksFirstRowProject.className = "allTasksFirstRowProject";
  allTasksFirstRowProject.innerText = "Project";
  allTasksFirstRow.appendChild(allTasksFirstRowProject);

  const allTasksFirstRowDone = document.createElement("div");
  allTasksFirstRowDone.className = "allTasksFirstRowDone";
  allTasksFirstRowDone.innerText = "Done";
  allTasksFirstRow.appendChild(allTasksFirstRowDone);

  const allTasksFirstRowPriority = document.createElement("div");
  allTasksFirstRowPriority.className = "allTasksFirstRowPriority";
  allTasksFirstRowPriority.innerText = "Priority";
  allTasksFirstRow.appendChild(allTasksFirstRowPriority);

  const allTasksFirstRowTask = document.createElement("div");
  allTasksFirstRowTask.className = "allTasksFirstRowTask";
  allTasksFirstRowTask.innerText = "Task";
  allTasksFirstRow.appendChild(allTasksFirstRowTask);

  const allTasksFirstRowDescription = document.createElement("div");
  allTasksFirstRowDescription.className = "allTasksFirstRowDescription";
  allTasksFirstRowDescription.innerText = "Description";
  allTasksFirstRow.appendChild(allTasksFirstRowDescription);

  const allTasksFirstRowDate = document.createElement("div");
  allTasksFirstRowDate.className = "allTasksFirstRowDate";
  allTasksFirstRowDate.innerText = "Date";
  allTasksFirstRow.appendChild(allTasksFirstRowDate);

  const allTasksFirstRowDelete = document.createElement("div");
  allTasksFirstRowDelete.className = "allTasksFirstRowDelete";
  allTasksFirstRowDelete.innerText = "Delete";
  allTasksFirstRow.appendChild(allTasksFirstRowDelete);

  AllTasksPageContainer.appendChild(allTasksFirstRow);

  // all Tasks

  projects.forEach((project, projectID) => {
    project.tasks.forEach((task, taskId) => {
      const singleTaskContainer = document.createElement("div");
      singleTaskContainer.className = "singleTaskContainer";
      singleTaskContainer.dataset.taskName = task.name;

      const singleTaskStatus = document.createElement("input");
      singleTaskStatus.className = "singleTaskStatus";
      singleTaskStatus.setAttribute("type", "checkbox");
      singleTaskContainer.appendChild(singleTaskStatus);

      const singleTaskProject = document.createElement("div");
      singleTaskProject.className = "singleTaskProject";
      singleTaskProject.innerText = project;
      allTasksFirstRow.appendChild(singleTaskContainer);

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
      // singleTaskBin.addEventListener("click", () => {
      //   project.tasks.delete(taskId);
      //   // refreshSingleProjectPage();
      // });
      singleTaskContainer.appendChild(singleTaskBin);

      AllTasksPageContainer.appendChild(singleTaskContainer);
    });
  });

  targetEl.appendChild(AllTasksPageContainer);

  return () => {
    targetEl.removeChild(AllTasksPageContainer);
  };
};

export default allTasksPage;
