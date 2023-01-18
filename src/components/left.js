import LiForLeftMenu from "./LiForLeftManu";
import AddProject from "./AddProject";
import ProjectsList from "./ProjectsList";
import CreateElement from "./small/CreateElement";

const Left = function Left(
  parentEl,
  projects,
  onAddProject,
  onDeleteProject,
  onChangeName
) {
  const leftContainer = document.createElement("nav");
  leftContainer.className = "leftContainer";

  // home part

  const homePartContainer = document.createElement("div");
  homePartContainer.className = "homePartContainer";

  CreateElement(homePartContainer, "h2", "homeTitle", "Home");

  const ulHomeWrapper = document.createElement("ul");
  ulHomeWrapper.className = "ulHomeWrapper";

  LiForLeftMenu(ulHomeWrapper, "AllTasks", "list_alt", "All Tasks");
  LiForLeftMenu(ulHomeWrapper, "Today", "today", "Today");
  LiForLeftMenu(ulHomeWrapper, "Next7", "date_range", "Next 7 Days");
  LiForLeftMenu(ulHomeWrapper, "Important", "star", "Important");

  homePartContainer.appendChild(ulHomeWrapper);

  // projects part

  const projectsContainer = document.createElement("div");
  projectsContainer.className = "projectsContainer";

  CreateElement(projectsContainer, "h2", "projectsTitle", "Projects");

  ProjectsList(
    projectsContainer,
    projects,
    (project) => {
      onDeleteProject(project);
    },
    onChangeName
  );

  const addNewProjectContainer = document.createElement("div");
  projectsContainer.className = "addNewProjectContainer";
  projectsContainer.appendChild(addNewProjectContainer);

  let destroyAddForm;

  LiForLeftMenu(
    addNewProjectContainer,
    "addProject",
    "add_circle",
    "Add Project",
    () => {
      destroyAddForm = AddProject(addNewProjectContainer, onAddProject, () =>
        destroyAddForm()
      );
    }
  );

  leftContainer.appendChild(homePartContainer);
  leftContainer.appendChild(projectsContainer);

  parentEl.appendChild(leftContainer);

  return () => {
    if (destroyAddForm) destroyAddForm();
    parentEl.removeChild(leftContainer);
  };
};

export default Left;
