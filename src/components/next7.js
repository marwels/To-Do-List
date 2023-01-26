import CreateElement from "./small/CreateElement";

const next7Page = function next7Page(
  targetEl,
  projects,
  onDeleteTask,
  onChecked
) {
  const next7Container = document.createElement("div");
  next7Container.className = "next7Container";

  CreateElement(next7Container, "h1", "pageTitle", "Tasks for next 7 days");

  const allTasksFirstRow = document.createElement("div");
  allTasksFirstRow.className = "allTasksFirstRow";

  CreateElement(allTasksFirstRow, "div", "Done", "Done");
  CreateElement(allTasksFirstRow, "div", "Project", "Project");
  CreateElement(allTasksFirstRow, "div", "Priority", "Priority");
  CreateElement(allTasksFirstRow, "div", "Task", "Task");
  CreateElement(allTasksFirstRow, "div", "Description", "Description");

  const allTasksFirstRowDelete = document.createElement("div");
  allTasksFirstRowDelete.className = "Delete";
  allTasksFirstRowDelete.innerText = "Delete";
  // add event Listener
  allTasksFirstRow.appendChild(allTasksFirstRowDelete);

  next7Container.appendChild(allTasksFirstRow);

  // all Tasks

  projects.forEach((project, projectID) => {
    const in7Days = new Date();
    in7Days.setHours(0, 0, 0);
    in7Days.setDate(in7Days.getDate() + 8);

    // change logic!!!
    project.tasks.forEach((task, taskId) => {
      if (task.date < in7Days) {
        const singleTaskContainer = document.createElement("div");
        singleTaskContainer.className = "singleTaskContainer";
        singleTaskContainer.dataset.taskName = task.name;

        const singleTaskStatus = document.createElement("input");
        singleTaskStatus.className = "singleTaskStatus";
        singleTaskStatus.setAttribute("type", "checkbox");
        singleTaskStatus.addEventListener("change", () => {
          if (singleTaskStatus.checked) {
            console.log("checked");
            onChecked(task, project, true);
          } else {
            console.log("not checked");
            onChecked(task, project, false);
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
          onDeleteTask(taskId, project);
        });
        // singleTaskBin.addEventListener("click", () => {
        //   project.tasks.delete(taskId);
        //   // refreshSingleProjectPage();
        // });
        singleTaskContainer.appendChild(singleTaskBin);

        next7Container.appendChild(singleTaskContainer);
      }
    });
  });

  targetEl.appendChild(next7Container);

  return () => {
    targetEl.removeChild(next7Container);
  };
};

export default next7Page;
