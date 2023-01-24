import CreateElement from "./components/small/CreateElement";

const todayPage = function todayPage(targetEl, projects) {
  const todayContainer = document.createElement("div");
  todayContainer.className = "todayContainer";

  CreateElement(todayContainer, "h1", "pageTitle", "Tasks for today");

  const allTasksFirstRow = document.createElement("div");
  allTasksFirstRow.className = "allTasksFirstRow";

  CreateElement(allTasksFirstRow, "div", "todayFirstRowProject", "Project");
  CreateElement(allTasksFirstRow, "div", "todayFirstRowDone", "Done");
  CreateElement(allTasksFirstRow, "div", "todayFirstRowPriority", "Priority");
  CreateElement(allTasksFirstRow, "div", "todayFirstRowTask", "Task");
  CreateElement(
    allTasksFirstRow,
    "div",
    "todayFirstRowDescription",
    "Description"
  );

  const allTasksFirstRowDelete = document.createElement("div");
  allTasksFirstRowDelete.className = "allTasksFirstRowDelete";
  allTasksFirstRowDelete.innerText = "Delete";
  // add event Listener
  allTasksFirstRow.appendChild(allTasksFirstRowDelete);

  todayContainer.appendChild(allTasksFirstRow);

  // all Tasks

  projects.forEach((project, projectID) => {
    let today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1; //January is 0!
    const yyyy = today.getFullYear();
    today = dd + mm + yyyy;
    project.tasks.forEach((task, taskId) => {
      // check below
      console.log(today, task.date);
      if (task.date === today) {
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

        todayContainer.appendChild(singleTaskContainer);
      }
    });
  });

  targetEl.appendChild(todayContainer);

  return () => {
    targetEl.removeChild(todayContainer);
  };
};

export default todayPage;
