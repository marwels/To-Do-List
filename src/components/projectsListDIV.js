const projectsListDIV = function projectsListDIV(targetEl, projects) {
  const projectsList = document.createElement("div");
  projectsList.className = "projectsList";

  for (let i = 0; i < projects.length; i++) {
    const projectDiv = document.createElement("div");
    projectDiv.className = "projectNameContainer";

    const icon = document.createElement("div");
    icon.className = "material-symbols-outlined icon";
    icon.innerText = "radio_button_checked";
    projectDiv.appendChild(icon);

    const projectName = document.createElement("h4");
    projectName.className = "material-symbols-outlined icon";
    projectName.innerText = projects[i];
    projectDiv.appendChild(projectName);

    const iconAction = document.createElement("div");
    iconAction.className = "material-symbols-outlined iconAction";
    iconAction.innerText = "more_vert";
    projectDiv.appendChild(icon);
  }
  return () => {
    targetEl.removeChild(projectsList);
  };
};

export default projectsListDIV;
