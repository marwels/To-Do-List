import CreateElement from "./small/CreateElement";
import AddTaskForm from "./AddTaskForm";

const ShowProject = function ShowProject(targetEl, projectObject) {
  const showProjectPageContainer = document.createElement("div");
  showProjectPageContainer.className = "showProjectPageContainer";

  const pageTitle = document.createElement("h1");
  pageTitle.className = `pageTitle ${projectObject.name}`;
  pageTitle.innerText = `Project: ${projectObject.name}`;
  showProjectPageContainer.appendChild(pageTitle);
  AddTaskForm(showProjectPageContainer, projectObject);

  CreateElement(showProjectPageContainer, "div", "listOfToDosDIV");

  targetEl.appendChild(showProjectPageContainer);

  return () => {
    targetEl.removeChild(showProjectPageContainer);
  };
};

export default ShowProject;
