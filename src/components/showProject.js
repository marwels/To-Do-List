const showProject = function showProject(parentElement, projectName) {
  const showProjectPageContainer = document.createElement("div");
  showProjectPageContainer.className = "showProjectPageContainer";

  const pageTitle = document.createElement("h1");
  pageTitle.className = `pageTitle, ${projectName}`;
  pageTitle.innerText = `Project: ${projectName}`;
  showProjectPageContainer.appendChild(pageTitle);
  parentElement.appendChild(showProjectPageContainer);

  return () => {
    parentElement.removeChild(showProjectPageContainer);
  };
};

export default showProject;
