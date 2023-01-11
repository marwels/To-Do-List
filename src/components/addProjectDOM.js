const addProjectDOM = function addProjectDOM(targetEl, onAddProject) {
  targetEl.replaceChildren();

  const addProjectContainer = document.createElement("div");
  addProjectContainer.className = "addProjectContainer";

  const iconAndInput = document.createElement("div");
  iconAndInput.className = "iconAndInput";

  const icon = document.createElement("div");
  icon.className = "material-symbols-outlined iconAddProject";
  icon.innerText = "radio_button_checked";
  iconAndInput.appendChild(icon);

  const inputAddProject = document.createElement("input");
  inputAddProject.className = "inputAddProject";
  inputAddProject.setAttribute("type", "text");
  inputAddProject.maxLength = 40;
  inputAddProject.required = true;
  inputAddProject.placeholder = "Enter Project Name";
  iconAndInput.appendChild(inputAddProject);
  addProjectContainer.appendChild(iconAndInput);

  const addButton = document.createElement("button");
  addButton.innerText = "Add";
  addButton.className = "Add";
  addButton.type = "submit";
  addButton.addEventListener("click", () => {
    onAddProject(inputAddProject.value);
  });

  addProjectContainer.appendChild(addButton);

  targetEl.appendChild(addProjectContainer);

  return () => {
    targetEl.removeChild(addProjectContainer);
  };
};

export default addProjectDOM;
