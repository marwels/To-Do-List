import CreateElement from "./small/CreateElement";
import AddTaskForm from "./AddTaskForm";

const singleProjectPage = function singleProjectPage(
  targetEl,
  projects,
  projectId
) {
  const singleProjectPageContainer = document.createElement("div");
  singleProjectPageContainer.className = "showProjectPageContainer";
  const project = projects.get(projectId);

  if (!project) {
    console.log("Project not found");
  } else {
    console.log(projects, project, projectId);

    const pageTitle = document.createElement("h1");
    pageTitle.className = `pageTitle ${project.name}`;
    pageTitle.innerText = `Project: ${project.name}`;
    singleProjectPageContainer.appendChild(pageTitle);
    AddTaskForm(singleProjectPageContainer, project);

    const listOfToDosDIV = document.createElement("div");
    listOfToDosDIV.className = "showProjectPageContainer";
    // tu wszystkie taski
    singleProjectPageContainer.appendChild(listOfToDosDIV);
  }

  targetEl.appendChild(singleProjectPageContainer);

  return () => {
    targetEl.removeChild(singleProjectPageContainer);
  };
};

export default singleProjectPage;
