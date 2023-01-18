import createElement from "./small/createElement";
import addToDoDOM from "./addToDoDOM";

const showProject = function showProject(parentElement, projectName) {
  const showProjectPageContainer = document.createElement("div");
  showProjectPageContainer.className = "showProjectPageContainer";

  const pageTitle = document.createElement("h1");
  pageTitle.className = `pageTitle, ${projectName}`;
  pageTitle.innerText = `Project: ${projectName}`;
  showProjectPageContainer.appendChild(pageTitle);
  addToDoDOM(showProjectPageContainer, projectName);

  createElement(showProjectPageContainer, "div", "listOfToDosDIV");

  parentElement.appendChild(showProjectPageContainer);

  return () => {
    parentElement.removeChild(showProjectPageContainer);
  };
};

export default showProject;
