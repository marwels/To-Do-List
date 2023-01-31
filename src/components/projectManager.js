const projectManager = function projectManager(targetEl, projects, child) {
  let destroyChild;

  function refreshTodayPage() {
    destroyChild();
    destroyChild = child(targetEl, projects, onDeleteTask, onChecked);
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

  destroyChild = child(targetEl, projects, onDeleteTask, onChecked);

  return () => {
    destroyChild();
  };
};

export default projectManager;
