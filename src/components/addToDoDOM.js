import createElement from "./small/createElement";

const addToDoDOM = function addToDoDOM(targetEl, projectName) {
  const addToDoContainer = document.createElement("div");
  addToDoContainer.className = "addToDoContainer";

  createElement(addToDoContainer, "h3", "addToDoTitle", "Create New Task");

  const inputAddToDoTitleDIV = document.createElement("div");
  inputAddToDoTitleDIV.className = "inputAddToDoTitle";

  createElement(inputAddToDoTitleDIV, "p", "inputAddToDoTitle", "Task Name");

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

  createElement(
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

  createElement(inputAddToDoDueDateDIV, "p", "inputAddToDoDescription", "Date");

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

  createElement(
    inputAddToDoPriorityDIV,
    "p",
    "inputAddToDoPriority",
    "Priority"
  );

  const inputAddToDoPriorityLow = document.createElement("input");
  inputAddToDoPriorityLow.className = "inputAddToDo inputAddToDoPriority low";
  inputAddToDoPriorityLow.setAttribute("type", "radio");
  inputAddToDoPriorityLow.setAttribute("name", "priority");
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
  //   addButton.addEventListener("click", () => {
  //     onAddProject(inputAddProject.value);
  //     projectsListDIV(parentEl, targetElForProjectsList, projects);
  //   });

  addToDoContainer.appendChild(addButton);

  targetEl.appendChild(addToDoContainer);

  return () => {
    targetEl.removeChild(addToDoContainer);
  };
};

export default addToDoDOM;
