import allTasksPage from "./allTasksPage";

const allTasksPageManager = function allTasksPageManager(targetEl, projects) {
  let destroyAllTasksPage;

  function refreshAllTasksPage() {
    destroyAllTasksPage();
    destroyAllTasksPage = allTasksPage(
      targetEl,
      projects,
      onDeleteTask,
      onChecked
    );
  }

  function onDeleteTask(deletedTaskId, project) {
    project.tasks.delete(deletedTaskId);
    refreshAllTasksPage();
  }

  function onChecked(task, project, checked) {
    if (checked) {
      task.done = true;
      console.log(task);
    } else {
      task.done = false;
    }
  }

  destroyAllTasksPage = allTasksPage(
    targetEl,
    projects,
    onDeleteTask,
    onChecked
  );

  return () => {
    destroyAllTasksPage();
  };
};

export default allTasksPageManager;
