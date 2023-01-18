import liForLeftMenu from "./liForLeftManu";
import addProjectDOM from "./addProjectDOM";
import projectsListDIV from "./projectsListDIV";
import createElement from "./small/createElement";

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

  createElement(homePartContainer, "h2", "homeTitle", "Home");

  const ulHomeWrapper = document.createElement("ul");
  ulHomeWrapper.className = "ulHomeWrapper";

  liForLeftMenu(ulHomeWrapper, "AllTasks", "list_alt", "All Tasks");
  liForLeftMenu(ulHomeWrapper, "Today", "today", "Today");
  liForLeftMenu(ulHomeWrapper, "Next7", "date_range", "Next 7 Days");
  liForLeftMenu(ulHomeWrapper, "Important", "star", "Important");

  homePartContainer.appendChild(ulHomeWrapper);

  // projects part

  const projectsContainer = document.createElement("div");
  projectsContainer.className = "projectsContainer";

  createElement(projectsContainer, "h2", "projectsTitle", "Projects");

  projectsListDIV(
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

  liForLeftMenu(
    addNewProjectContainer,
    "addProject",
    "add_circle",
    "Add Project",
    () => {
      destroyAddForm = addProjectDOM(addNewProjectContainer, onAddProject, () =>
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
