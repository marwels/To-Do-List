import CreateElement from "./small/CreateElement";

const AddTaskForm = function AddTaskForm(
  targetEl,
  project,
  projectId,
  onAddTask
) {
  const task = {};
  task.projectName = project.name;
  task.projectId = projectId;
  const addToDoContainer = document.createElement("form");
  addToDoContainer.className = "addToDoContainer";

  CreateElement(addToDoContainer, "h3", "addToDoTitle", "Create New Task");

  const inputAddToDoTitleDIV = document.createElement("div");
  inputAddToDoTitleDIV.className = "inputAddToDoTitle";

  CreateElement(inputAddToDoTitleDIV, "p", "inputAddToDoTitle", "Task Name");

  const inputAddToDoTitle = document.createElement("input");
  inputAddToDoTitle.className = "inputAddToDo inputAddToDoTitle";
  inputAddToDoTitle.setAttribute("type", "text");
  inputAddToDoTitle.maxLength = 40;
  inputAddToDoTitle.required = true;
  inputAddToDoTitle.placeholder = "Laundry";
  inputAddToDoTitleDIV.appendChild(inputAddToDoTitle);
  addToDoContainer.appendChild(inputAddToDoTitleDIV);

  const inputAddToDoDescriptionDIV = document.createElement("div");
  inputAddToDoDescriptionDIV.className = "inputAddToDoDescription";

  CreateElement(
    inputAddToDoDescriptionDIV,
    "p",
    "inputAddToDoDescription",
    "Description (optional)"
  );

  const inputAddToDoDescription = document.createElement("input");
  inputAddToDoDescription.className = "inputAddToDo inputAddToDoDescription";
  inputAddToDoDescription.setAttribute("type", "text");
  inputAddToDoDescription.maxLength = 50;
  inputAddToDoDescription.placeholder = "Wash only the dark ones";
  inputAddToDoDescriptionDIV.appendChild(inputAddToDoDescription);
  addToDoContainer.appendChild(inputAddToDoDescriptionDIV);

  const inputAddToDoDueDateDIV = document.createElement("div");
  inputAddToDoDueDateDIV.className = "inputAddToDoDueDate";

  CreateElement(inputAddToDoDueDateDIV, "p", "inputAddToDoDescription", "Date");

  const inputAddToDoDueDate = document.createElement("input");
  inputAddToDoDueDate.className = "inputAddToDo inputAddToDoDueDate";
  inputAddToDoDueDate.setAttribute("type", "date");
  inputAddToDoDueDate.valueAsDate = new Date();
  inputAddToDoDueDate.min = new Date();
  // const date = new Date();
  // const day = date.getDate();
  // const month = date.getMonth() + 1;
  // const year = date.getFullYear();
  inputAddToDoDueDate.required = true;
  inputAddToDoDueDateDIV.appendChild(inputAddToDoDueDate);
  addToDoContainer.appendChild(inputAddToDoDueDateDIV);

  const inputAddToDoPriorityDIV = document.createElement("div");
  inputAddToDoPriorityDIV.className = "inputAddToDoPriority";

  CreateElement(
    inputAddToDoPriorityDIV,
    "p",
    "inputAddToDoPriority",
    "Priority"
  );

  const inputAddToDoPriorityLow = document.createElement("input");
  inputAddToDoPriorityLow.className = "inputAddToDo inputAddToDoPriority low";
  inputAddToDoPriorityLow.setAttribute("type", "radio");
  inputAddToDoPriorityLow.setAttribute("name", "priority");
  inputAddToDoPriorityLow.setAttribute("required", "required");
  inputAddToDoPriorityDIV.appendChild(inputAddToDoPriorityLow);

  const inputAddToDoPriorityMedium = document.createElement("input");
  inputAddToDoPriorityMedium.className =
    "inputAddToDo inputAddToDoPriority medium";
  inputAddToDoPriorityMedium.setAttribute("type", "radio");
  inputAddToDoPriorityMedium.setAttribute("name", "priority");
  inputAddToDoPriorityDIV.appendChild(inputAddToDoPriorityMedium);

  const inputAddToDoPriorityHigh = document.createElement("input");
  inputAddToDoPriorityHigh.className = "inputAddToDo inputAddToDoPriority high";
  inputAddToDoPriorityHigh.setAttribute("type", "radio");
  inputAddToDoPriorityHigh.setAttribute("name", "priority");
  inputAddToDoPriorityDIV.appendChild(inputAddToDoPriorityHigh);
  addToDoContainer.appendChild(inputAddToDoPriorityDIV);

  const addButton = document.createElement("button");
  addButton.innerText = "Add";
  addButton.className = "Add";
  addButton.type = "submit";
  addToDoContainer.addEventListener("submit", (e) => {
    e.preventDefault();
    task.name = inputAddToDoTitle.value;
    task.description = inputAddToDoDescription.value;
    task.date = inputAddToDoDueDate.valueAsDate;
    if (inputAddToDoPriorityLow.checked) {
      task.priority = 1;
    } else if (inputAddToDoPriorityMedium.checked) {
      task.priority = 2;
    } else if (inputAddToDoPriorityHigh.checked) {
      task.priority = 3;
    } else {
      console.log("sth wrong with priority");
    }
    onAddTask(task);
  });

  addToDoContainer.appendChild(addButton);

  targetEl.appendChild(addToDoContainer);

  return () => {
    targetEl.removeChild(addToDoContainer);
  };
};

export default AddTaskForm;
