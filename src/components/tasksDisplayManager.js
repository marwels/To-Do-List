const tasksDisplayManager = function tasksDisplayManager(
  targetEl,
  projects,
  onProjectChanged,
  child
) {
  let destroyChild;

  function refreshChildPage() {
    destroyChild();
    destroyChild = child(targetEl, projects, onDeleteTask, onChecked);
  }

  function onDeleteTask(deletedTaskId, projectId) {
    const project = projects.get(projectId);
    project.tasks.delete(deletedTaskId);
    refreshChildPage();
    onProjectChanged();
  }

  function onChecked(task, projectId, checked) {
    if (checked) {
      task.done = true;
    } else {
      task.done = false;
    }
    onProjectChanged();
  }

  destroyChild = child(targetEl, projects, onDeleteTask, onChecked);

  return () => {
    destroyChild();
  };
};

export default tasksDisplayManager;
