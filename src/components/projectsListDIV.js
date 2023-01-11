const projectsListDIV = function projectsListDIV(targetEl, projects) {
  // const projectsList = document.createElement("div");
  // projectsList.className = "projectsList";

  let children = [];

  for (let i = 0; i < projects.length; i++) {
    const singleProjectContainer = document.createElement("div");
    singleProjectContainer.className = "singleProjectContainer";

    // const icon = document.createElement("div");
    // icon.className = "material-symbols-outlined icon";
    // icon.innerText = "radio_button_checked";
    // projectDiv.appendChild(icon);

    const projectName = document.createElement("button");
    projectName.className = "material-symbols-outlined icon";
    projectName.innerText = projects[i];
    singleProjectContainer.appendChild(projectName);

    const deleteOrRename = document.createElement("button");
    deleteOrRename.className = "material-symbols-outlined deleteOrRename";
    deleteOrRename.innerText = "more_vert";
    singleProjectContainer.appendChild(deleteOrRename);
    children.push(singleProjectContainer);
  }
  return () => {
    children.forEach((element) => {
      targetEl.removeChild(element);
    });
  };
};

export default projectsListDIV;
