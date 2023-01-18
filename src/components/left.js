import LiForLeftMenu from "./LiForLeftManu";
import AddProjectForm from "./AddProjectForm";
import ProjectsList from "./ProjectsList";
import CreateElement from "./small/CreateElement";

const Left = function Left(
  rootParentEl,
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

  // CreateElement(homePartContainer, "h2", "homeTitle", "Home");

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
    onChangeName,
    rootParentEl
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
      destroyAddForm = AddProjectForm(
        addNewProjectContainer,
        onAddProject,
        () => destroyAddForm()
      );
    }
  );

  leftContainer.appendChild(homePartContainer);
  leftContainer.appendChild(projectsContainer);

  rootParentEl.appendChild(leftContainer);

  return () => {
    if (destroyAddForm) destroyAddForm();
    rootParentEl.removeChild(leftContainer);
  };
};

export default Left;
