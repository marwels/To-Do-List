import EditableButton from "./EditableButton";
import ShowProject from "./ShowProject";

const ProjectsList = function ProjectsList(
  targetEl,
  projects,
  onDelete,
  onChangeName
) {
  // const projectsList = document.createElement("div");
  // projectsList.className = "projectsList";
  const projectsList = document.createElement("div");
  projectsList.className = "projectsList";
  targetEl.appendChild(projectsList);

  const children = [];

  projects.forEach((project, projectId) => {
    const singleProjectContainer = document.createElement("div");
    singleProjectContainer.className = "singleProjectContainer";
    singleProjectContainer.dataset.projectName = project.name;

    // const icon = document.createElement("div");
    // icon.className = "material-symbols-outlined icon";
    // icon.innerText = "radio_button_checked";
    // projectDiv.appendChild(icon);

    // const projectName = document.createElement("button");
    // projectName.className = "projectName";
    // projectName.innerText = projects[i];
    // const projectNameforPageTitle = projectName.innerText;
    // projectName.addEventListener("click", () => {
    //   showProject(parentEl, projectNameforPageTitle);
    // });
    // singleProjectContainer.appendChild(projectName);

    let editableButtonDestroy;

    function onEditableButtonChangedName(newVal) {
      console.log(projectId, newVal);
      onChangeName(projectId, newVal);
    }

    function onEditableButtonClicked() {
      window.location.hash = `#project${projectId}`;
      console.log("Show project: " + project.name);
    }

    editableButtonDestroy = EditableButton(
      singleProjectContainer,
      project.name,
      false,
      onEditableButtonClicked,
      onEditableButtonChangedName
    );

    children.push(() => editableButtonDestroy());

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
    dropdownRename.dataset.projectName = project.name;
    dropdownRename.innerText = "Rename";
    dropdownRename.className = "rename";
    dropdownRename.addEventListener("click", () => {
      editableButtonDestroy();
      editableButtonDestroy = EditableButton(
        singleProjectContainer,
        project.name,
        true,
        onEditableButtonClicked,
        onEditableButtonChangedName
      );
    });
    dropdown.appendChild(dropdownRename);
    const dropdownDelete = document.createElement("button");
    dropdownDelete.dataset.projectName = project.name;
    dropdownDelete.className = "delete";
    dropdownDelete.innerText = "Delete";
    dropdownDelete.addEventListener("click", () => {
      // for (let i = 0; i < projects.length; i++) {
      //   if (projects[i] === dropdownDelete.dataset.projectName) {
      //     projects.splice(i, 1);
      //     projectsListDIV(targetEl, projects);
      //   }
      // }
      onDelete(projectId);
    });

    dropdown.appendChild(dropdownDelete);
    deleteOrRenameContainer.appendChild(dropdown);
    singleProjectContainer.appendChild(deleteOrRenameContainer);

    deleteOrRename.addEventListener("click", () => {
      dropdown.classList.toggle("show");
    });

    projectsList.appendChild(singleProjectContainer);

    window.addEventListener("click", (event) => {
      if (!event.target.matches(".dropbtn")) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
          const openDropdown = dropdowns[i];
          openDropdown.classList.remove("show");
        }
      }
    });
  });

  return () => {
    children.forEach((destroy) => {
      destroy();
    });
    targetEl.removeChild(projectsList);
  };
};

export default ProjectsList;
