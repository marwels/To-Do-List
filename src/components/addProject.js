const addProject = function addProject(targetEl) {
  const addProjectContainer = document.createElement("div");
  addProjectContainer.className = "addProjectContainer";

  const icon = document.createElement("div");
  icon.className = "material-symbols-outlined iconAddProject";
  icon.innerText = "menu";
  addProjectContainer.appendChild(icon);

  const inputAddProject = document.createElement("input");
  inputAddProject.className = "inputAddProject";
  inputAddProject.setAttribute("type", "text");
  inputAddProject.placeholder = "Enter Project Name";
  addProjectContainer.appendChild(inputAddProject);

  const buttons = document.createElement("div");
  buttons.className = "addProjeceButtonsContainer";

  const addButton = document.createElement("button");
  addButton.innerText = "Add";
  buttons.appendChild(addButton);

  const cancelButton = document.createElement("button");
  cancelButton.innerText = "Cancel";
  buttons.appendChild(cancelButton);

  addProjectContainer.appendChild(buttons);

  targetEl.appendChild(addProjectContainer);

  return () => {
    targetEl.removeChild(addProjectContainer);
  };
};

export default addProject;
