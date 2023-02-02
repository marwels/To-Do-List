import filteredTasksPage from "./filteredTasksPage";

const todayPage = function todayPage(
  targetEl,
  projects,
  onDeleteTask,
  onChecked
) {
  const title = "Tasks for today";

  const today = new Date();
  const todayDay = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  function doesTaskMatch(task) {
    return (
      task.date.getDate() === todayDay &&
      task.date.getMonth() === todayMonth &&
      task.date.getFullYear() === todayYear
    );
  }

  return filteredTasksPage(
    targetEl,
    projects,
    onDeleteTask,
    onChecked,
    doesTaskMatch,
    title
  );
};

export default todayPage;
