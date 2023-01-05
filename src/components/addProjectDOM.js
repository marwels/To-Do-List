const addProjectDOM = function addProjectDOM(targetEl) {
  const addProjectContainer = document.createElement("div");
  addProjectContainer.className = "addProjectContainer";

  // const icon = document.createElement("div");
  // icon.className = "material-symbols-outlined iconAddProject";
  // icon.innerText = "menu";
  // addProjectContainer.appendChild(icon);

  const inputAddProject = document.createElement("input");
  inputAddProject.className = "inputAddProject";
  inputAddProject.setAttribute("type", "text");
  inputAddProject.placeholder = "Enter Project Name";
  addProjectContainer.appendChild(inputAddProject);

  const buttons = document.createElement("div");
  buttons.className = "addProjetButtonsContainer";

  const addButton = document.createElement("button");
  addButton.innerText = "Add";
  addButton.className = "Add";
  // addButton.addEventListener("click");
  buttons.appendChild(addButton);

  const cancelButton = document.createElement("button");
  cancelButton.innerText = "Cancel";
  cancelButton.className = "Cancel";
  cancelButton.addEventListener("click", () =>
    targetEl.removeChild(addProjectContainer)
  );
  buttons.appendChild(cancelButton);

  addProjectContainer.appendChild(buttons);

  targetEl.appendChild(addProjectContainer);

  return () => {
    targetEl.removeChild(addProjectContainer);
  };
};

export default addProjectDOM;
