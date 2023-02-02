import CreateElement from "./small/CreateElement";

const filteredTasksPage = function filteredTasksPage(
  targetEl,
  projects,
  onDeleteTask,
  onChecked,
  doesTaskMatch,
  title
) {
  const todayContainer = document.createElement("div");
  todayContainer.className = "todayContainer";

  CreateElement(todayContainer, "h1", "pageTitle", title);

  const allTasksFirstRow = document.createElement("div");
  allTasksFirstRow.className = "allTasksFirstRow";

  CreateElement(allTasksFirstRow, "div", "Done", "Done");
  CreateElement(allTasksFirstRow, "div", "Project", "Project");
  CreateElement(allTasksFirstRow, "div", "Priority", "Priority");
  CreateElement(allTasksFirstRow, "div", "Task", "Task");
  CreateElement(allTasksFirstRow, "div", "Description", "Description");
  CreateElement(allTasksFirstRow, "div", "Date", "Date");

  const allTasksFirstRowDelete = document.createElement("div");
  allTasksFirstRowDelete.className = "Delete";
  allTasksFirstRowDelete.innerText = "Delete";
  // add event Listener
  allTasksFirstRow.appendChild(allTasksFirstRowDelete);

  todayContainer.appendChild(allTasksFirstRow);

  // all Tasks

  projects.forEach((project, projectId) => {
    project.tasks.forEach((task, taskId) => {
      if (doesTaskMatch(task)) {
        const singleTaskContainer = document.createElement("div");
        singleTaskContainer.className = "singleTaskContainer";
        singleTaskContainer.dataset.taskName = task.name;

        const singleTaskStatus = document.createElement("input");
        singleTaskStatus.className = "singleTaskStatus";
        singleTaskStatus.setAttribute("type", "checkbox");
        singleTaskStatus.addEventListener("change", () => {
          if (singleTaskStatus.checked) {
            onChecked(task, projectId, true);
          } else {
            onChecked(task, projectId, false);
          }
        });
        if (task.done === true) {
          singleTaskStatus.checked = true;
        }
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
        singleTaskDate.innerText = new Date(task.date).toLocaleDateString();
        singleTaskContainer.appendChild(singleTaskDate);

        const singleTaskBin = document.createElement("button");
        singleTaskBin.className = "singleTaskBin material-symbols-outlined";
        singleTaskBin.innerText = "delete";
        singleTaskBin.addEventListener("click", () => {
          onDeleteTask(taskId, projectId);
        });
        // singleTaskBin.addEventListener("click", () => {
        //   project.tasks.delete(taskId);
        //   // refreshSingleProjectPage();
        // });
        singleTaskContainer.appendChild(singleTaskBin);

        todayContainer.appendChild(singleTaskContainer);
      }
    });
  });

  targetEl.appendChild(todayContainer);

  return () => {
    targetEl.removeChild(todayContainer);
  };
};

export default filteredTasksPage;
