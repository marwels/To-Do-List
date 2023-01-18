import CreateElement from "./small/CreateElement";

const AddProjectForm = function AddProjectForm(targetEl, onAddProject) {
  targetEl.replaceChildren();
  const addProjectContainer = document.createElement("form");
  addProjectContainer.className = "addProjectContainer";

  const iconAndInput = document.createElement("div");
  iconAndInput.className = "iconAndInput";

  CreateElement(
    iconAndInput,
    "div",
    "material-symbols-outlined iconAddProject",
    "radio_button_checked"
  );

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
  addProjectContainer.addEventListener("submit", () => {
    onAddProject(inputAddProject.value);
  });
  targetEl.appendChild(addProjectContainer);

  return () => {
    targetEl.removeChild(addProjectContainer);
  };
};

export default AddProjectForm;
