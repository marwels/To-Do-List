/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
const projectManager = function projectManager(
  targetEl,
  projects,
  projectId,
  child
) {
  let destroyChild;

  function refreshChildPage() {
    destroyChild();
    destroyChild = child(
      targetEl,
      projects,
      onAddTask,
      onDeleteTask,
      onChecked
    );
  }

  function onAddTask(newTask) {
    const project = projects.get(projectId);
    project.tasks.set(String(Date.now()), newTask);
    // console.log({ project });
    refreshChildPage();
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

  destroyChild = child(
    targetEl,
    projects,
    projectId,
    onAddTask,
    onDeleteTask,
    onChecked
  );

  return () => {
    destroyChild();
  };
};

export default projectManager;
