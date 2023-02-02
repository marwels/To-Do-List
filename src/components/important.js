import filteredTasksPage from "./filteredTasksPage";

const importantPage = function importantPage(
  targetEl,
  projects,
  onDeleteTask,
  onChecked
) {
  function doesTaskMatch(task) {
    return task.priority === 3;
  }
  const title = "Important Tasks";

  return filteredTasksPage(
    targetEl,
    projects,
    onDeleteTask,
    onChecked,
    doesTaskMatch,
    title
  );
};

export default importantPage;
