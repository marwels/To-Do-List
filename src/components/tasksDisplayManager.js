const tasksDisplayManager = function tasksDisplayManager(
  targetEl,
  projects,
  child
) {
  let destroyChild;

  function refreshChildPage() {
    destroyChild();
    destroyChild = child(targetEl, projects, onDeleteTask, onChecked);
  }

  function onDeleteTask(deletedTaskId, project) {
    project.tasks.delete(deletedTaskId);
    refreshChildPage();
  }

  function onChecked(task, project, checked) {
    if (checked) {
      task.done = true;
    } else {
      task.done = false;
    }
  }

  destroyChild = child(targetEl, projects, onDeleteTask, onChecked);

  return () => {
    destroyChild();
  };
};

export default tasksDisplayManager;
