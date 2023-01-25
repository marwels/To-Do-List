import allTasksPage from "./allTasksPage";

const allTasksPageManager = function allTasksPageManager(targetEl, projects) {
  let destroyAllTasksPage;

  function refreshAllTasksPage() {
    destroyAllTasksPage();
    destroyAllTasksPage = allTasksPage(targetEl, projects, onDeleteTask);
  }

  function onDeleteTask(deletedTaskId, project) {
    project.tasks.delete(deletedTaskId);
    refreshAllTasksPage();
  }

  destroyAllTasksPage = allTasksPage(targetEl, projects, onDeleteTask);

  return () => {
    destroyAllTasksPage();
  };
};

export default allTasksPageManager;
