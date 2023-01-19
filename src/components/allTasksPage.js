const allTasksPage = function allTasksPage(targetEl) {
  const AllTasksPageContainer = document.createElement("div");
  AllTasksPageContainer.className = "AllTasksPageContainer";

  const pageTitle = document.createElement("h1");
  pageTitle.innerText = "All Tasks";
  AllTasksPageContainer.appendChild(pageTitle);

  targetEl.appendChild(AllTasksPageContainer);

  return () => {
    targetEl.removeChild(AllTasksPageContainer);
  };
};

export default allTasksPage;
