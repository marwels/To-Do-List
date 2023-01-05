const AllTasksPage = function AllTasksPage(targetEl) {
  const AllTasksPageContainer = document.createElement("nav");
  AllTasksPageContainer.className = "AllTasksPageContainer";

  const pageTitle = document.createElement("h1");
  pageTitle.innerText = "All Tasks";
  AllTasksPageContainer.appendChild(pageTitle);

  return () => {
    targetEl.removeChild(AllTasksPageContainer);
  };
};

export default AllTasksPage;
