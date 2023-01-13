import createElement from "./small/createElement";
import projectsListDIV from "./projectsListDIV";

const addProjectDOM = function addProjectDOM(
  targetEl,
  onAddProject,
  targetElForProjectsList,
  projects,
  parentEl
) {
  targetEl.replaceChildren();

  const addProjectContainer = document.createElement("div");
  addProjectContainer.className = "addProjectContainer";

  const iconAndInput = document.createElement("div");
  iconAndInput.className = "iconAndInput";

  createElement(
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
    projectsListDIV(parentEl, targetElForProjectsList, projects);
  });

  addProjectContainer.appendChild(addButton);

  targetEl.appendChild(addProjectContainer);

  return () => {
    targetEl.removeChild(addProjectContainer);
  };
};

export default addProjectDOM;
