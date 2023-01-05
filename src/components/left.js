import liForLeftMenu from "./liForLeftManu";
import addProjectDOM from "./addProjectDOM";

const Left = function Left(targetEl) {
  const leftContainer = document.createElement("nav");
  leftContainer.className = "leftContainer";

  // home part

  const homePartContainer = document.createElement("div");
  homePartContainer.className = "homePartContainer";

  const homeTitle = document.createElement("h2");
  homeTitle.className = "homeTitle";
  homeTitle.innerText = "Home";
  homePartContainer.appendChild(homeTitle);

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

  const projectsTitle = document.createElement("h2");
  projectsTitle.className = "projectsTitle";
  projectsTitle.innerText = "Projects";
  projectsContainer.appendChild(projectsTitle);

  const projectsList = document.createElement("div");
  projectsList.className = "projectsList";
  projectsContainer.appendChild(projectsList);

  liForLeftMenu(
    projectsContainer,
    "addProject",
    "add_circle",
    "Add Project",
    () => addProjectDOM(projectsList)
  );

  leftContainer.appendChild(homePartContainer);
  leftContainer.appendChild(projectsContainer);

  targetEl.appendChild(leftContainer);

  return () => {
    targetEl.removeChild(leftContainer);
  };
};

export default Left;
