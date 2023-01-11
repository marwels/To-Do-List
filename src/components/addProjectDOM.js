const addProjectDOM = function addProjectDOM(targetEl, onAddProject, onCancel) {
  const addProjectContainer = document.createElement("div");
  addProjectContainer.className = "addProjectContainer";

  const icon = document.createElement("div");
  icon.className = "material-symbols-outlined iconAddProject";
  icon.innerText = "radio_button_checked";
  addProjectContainer.appendChild(icon);

  const inputAddProject = document.createElement("input");
  inputAddProject.className = "inputAddProject";
  inputAddProject.setAttribute("type", "text");
  inputAddProject.maxLength = 40;
  inputAddProject.required = true;
  inputAddProject.placeholder = "Enter Project Name";
  addProjectContainer.appendChild(inputAddProject);

  const buttons = document.createElement("div");
  buttons.className = "addProjetButtonsContainer";

  const addButton = document.createElement("button");
  addButton.innerText = "Add";
  addButton.className = "Add";
  addButton.type = "submit";
  addButton.addEventListener("click", () =>
    onAddProject(inputAddProject.value)
  );
  buttons.appendChild(addButton);

  const cancelButton = document.createElement("button");
  cancelButton.innerText = "Cancel";
  cancelButton.className = "Cancel";
  cancelButton.addEventListener("click", () => onCancel());
  buttons.appendChild(cancelButton);

  addProjectContainer.appendChild(buttons);

  targetEl.appendChild(addProjectContainer);

  return () => {
    targetEl.removeChild(addProjectContainer);
  };
};

export default addProjectDOM;
