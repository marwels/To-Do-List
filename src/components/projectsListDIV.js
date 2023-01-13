import showProject from "./showProject";

const projectsListDIV = function projectsListDIV(parentEl, targetEl, projects) {
  // const projectsList = document.createElement("div");
  // projectsList.className = "projectsList";

  let children = [];
  targetEl.replaceChildren();

  for (let i = 0; i < projects.length; i++) {
    const singleProjectContainer = document.createElement("div");
    singleProjectContainer.className = "singleProjectContainer";
    singleProjectContainer.dataset.projectName = projects[i];

    // const icon = document.createElement("div");
    // icon.className = "material-symbols-outlined icon";
    // icon.innerText = "radio_button_checked";
    // projectDiv.appendChild(icon);

    const projectName = document.createElement("button");
    projectName.className = "projectName";
    projectName.innerText = projects[i];
    let projectNameforPageTitle = projectName.innerText;
    projectName.addEventListener("click", () => {
      showProject(parentEl, projectNameforPageTitle);
    });
    singleProjectContainer.appendChild(projectName);

    // dropdown menu rename/delete
    const deleteOrRenameContainer = document.createElement("div");
    deleteOrRenameContainer.className = "dropdown";
    const deleteOrRename = document.createElement("button");
    deleteOrRename.className =
      "material-symbols-outlined deleteOrRename dropbtn";
    deleteOrRename.innerText = "more_vert";
    deleteOrRenameContainer.appendChild(deleteOrRename);
    const dropdown = document.createElement("div");
    dropdown.className = "dropdown-content";
    const dropdownRename = document.createElement("button");
    dropdownRename.dataset.projectName = projects[i];
    dropdownRename.innerText = "Rename";
    dropdownRename.className = "rename";
    // dropdownRename.addEventListener("click", () =>
    // )
    dropdown.appendChild(dropdownRename);
    const dropdownDelete = document.createElement("button");
    dropdownDelete.dataset.projectName = projects[i];
    dropdownDelete.className = "delete";
    dropdownDelete.innerText = "Delete";
    dropdownDelete.addEventListener("click", () => {
      for (let i = 0; i < projects.length; i++) {
        if (projects[i] === dropdownDelete.dataset.projectName) {
          projects.splice(i, 1);
          projectsListDIV(targetEl, projects);
        }
      }
    });

    dropdown.appendChild(dropdownDelete);
    deleteOrRenameContainer.appendChild(dropdown);
    singleProjectContainer.appendChild(deleteOrRenameContainer);

    deleteOrRename.addEventListener("click", () => {
      dropdown.classList.toggle("show");
    });

    children.push(singleProjectContainer);
    targetEl.appendChild(singleProjectContainer);

    window.onclick = function (event) {
      if (!event.target.matches(".dropbtn")) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
          const openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
          }
        }
      }
    };
  }

  return () => {
    children.forEach((element) => {
      targetEl.removeChild(element);
    });
  };
};

export default projectsListDIV;
