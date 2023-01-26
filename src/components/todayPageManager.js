import todayPage from "./todayPage";

const todayPageManager = function todayPageManager(targetEl, projects) {
  let destroyTodayPage;

  function refreshTodayPage() {
    destroyTodayPage();
    destroyTodayPage = todayPage(targetEl, projects, onDeleteTask, onChecked);
  }

  function onDeleteTask(deletedTaskId, project) {
    project.tasks.delete(deletedTaskId);
    refreshTodayPage();
  }

  function onChecked(task, project, checked) {
    if (checked) {
      task.done = true;
    } else {
      task.done = false;
    }
  }

  destroyTodayPage = todayPage(targetEl, projects, onDeleteTask, onChecked);

  return () => {
    destroyTodayPage();
  };
};

export default todayPageManager;
