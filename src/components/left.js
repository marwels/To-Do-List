import { divForLeftMenu } from "./divForLeftManu";
import addProject from "./addProject";

const Left = function Left(targetEl) {
  const leftContainer = document.createElement("div");
  leftContainer.className = "leftContainer";

  // home part

  const homePartContainer = document.createElement("div");
  homePartContainer.className = "homePartContainer";

  const homeTitle = document.createElement("div");
  homeTitle.className = "homeTitle";
  homeTitle.innerText = "Home";
  homePartContainer.appendChild(homeTitle);

  divForLeftMenu(homePartContainer, "AllTasks", "list_alt", "All Tasks");
  divForLeftMenu(homePartContainer, "Today", "today", "Today");
  divForLeftMenu(homePartContainer, "Next7", "date_range", "Next 7 Days");
  divForLeftMenu(homePartContainer, "Important", "star", "Important");

  // projects part

  const projectsContainer = document.createElement("div");
  projectsContainer.className = "projectsContainer";

  const projectsTitle = document.createElement("div");
  projectsTitle.className = "projectsTitle";
  projectsTitle.innerText = "Projects";
  projectsContainer.appendChild(projectsTitle);

  const projectsList = document.createElement("div");
  projectsList.className = "projectsList";
  projectsContainer.appendChild(projectsList);

  divForLeftMenu(
    projectsContainer,
    "addProject",
    "add_circle",
    "Add Project",
    () => addProject(projectsList)
  );

  leftContainer.appendChild(homePartContainer);
  leftContainer.appendChild(projectsContainer);

  targetEl.appendChild(leftContainer);

  return () => {
    targetEl.removeChild(leftContainer);
  };
};

export default Left;
