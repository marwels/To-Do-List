import importantPage from "./important";

const importantManager = function importantManager(targetEl, projects) {
  let destroyImportant;

  function refreshImportant() {
    destroyImportant();
    destroyImportant = importantPage(
      targetEl,
      projects,
      onDeleteTask,
      onChecked
    );
  }

  function onDeleteTask(deletedTaskId, project) {
    project.tasks.delete(deletedTaskId);
    refreshImportant();
  }

  function onChecked(task, project, checked) {
    if (checked) {
      task.done = true;
    } else {
      task.done = false;
    }
  }

  destroyImportant = importantPage(targetEl, projects, onDeleteTask, onChecked);

  return () => {
    destroyImportant();
  };
};

export default importantManager;
