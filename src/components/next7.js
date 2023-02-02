import filteredTasksPage from "./filteredTasksPage";

const next7Page = function next7Page(
  targetEl,
  projects,
  onDeleteTask,
  onChecked
) {
  const in7Days = new Date();
  in7Days.setHours(0, 0, 0);
  in7Days.setDate(in7Days.getDate() + 8);

  function doesTaskMatch(task) {
    return task.date < in7Days;
  }

  const title = "Tasks for next 7 days";

  return filteredTasksPage(
    targetEl,
    projects,
    onDeleteTask,
    onChecked,
    doesTaskMatch,
    title
  );
};

export default next7Page;
