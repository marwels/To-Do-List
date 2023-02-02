import filteredTasksPage from "./filteredTasksPage";

const allTasksPage = function allTasksPage(
  targetEl,
  projects,
  onDeleteTask,
  onChecked
) {
  function doesTaskMatch() {
    return true;
  }

  const title = "All Tasks";

  return filteredTasksPage(
    targetEl,
    projects,
    onDeleteTask,
    onChecked,
    doesTaskMatch,
    title
  );
};

export default allTasksPage;
