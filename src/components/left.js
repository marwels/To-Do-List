import LiForLeftMenu from "./LiForLeftManu";
import AddProjectForm from "./AddProjectForm";
import ProjectsList from "./ProjectsList";
import CreateElement from "./small/CreateElement";

const Left = function Left(
  targetEl,
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

  LiForLeftMenu(ulHomeWrapper, "AllTasks", "list_alt", "All Tasks", () => {
    window.location.hash = '#allTasks'
  });
  LiForLeftMenu(ulHomeWrapper, "Today", "today", "Today", () => {
    window.location.hash = "#today";
  });
  LiForLeftMenu(ulHomeWrapper, "Next7", "date_range", "Next 7 Days", () => {
    window.location.hash = "#next7";
  });
  LiForLeftMenu(ulHomeWrapper, "Important", "star", "Important", () => {
    window.location.hash = "#important";
  });

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
    targetEl
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

  targetEl.appendChild(leftContainer);

  return () => {
    if (destroyAddForm) destroyAddForm();
    targetEl.removeChild(leftContainer);
  };
};

export default Left;
