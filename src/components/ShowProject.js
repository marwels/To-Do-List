import CreateElement from "./small/CreateElement";
import AddTask from "./AddTask";

const ShowProject = function ShowProject(parentElement, projectName) {
  const showProjectPageContainer = document.createElement("div");
  showProjectPageContainer.className = "showProjectPageContainer";

  const pageTitle = document.createElement("h1");
  pageTitle.className = `pageTitle, ${projectName}`;
  pageTitle.innerText = `Project: ${projectName}`;
  showProjectPageContainer.appendChild(pageTitle);
  AddTask(showProjectPageContainer, projectName);

  CreateElement(showProjectPageContainer, "div", "listOfToDosDIV");

  parentElement.appendChild(showProjectPageContainer);

  return () => {
    parentElement.removeChild(showProjectPageContainer);
  };
};

export default ShowProject;
