import singleProjectPage from "./singleProjectPage";

const projectPageManager = function projectPageManager(
  targetEl,
  projects,
  projectId
) {
  let destroySingleProjectPage;

  function refreshSingleProjectPage() {
    destroySingleProjectPage();
    destroySingleProjectPage = singleProjectPage(
      targetEl,
      projects,
      projectId,
      onAddTask,
      onDeleteTask,
      onChecked
    );
  }

  function onAddTask(newTask) {
    const project = projects.get(projectId);
    project.tasks.set(String(Date.now()), newTask);
    // console.log({ project });
    refreshSingleProjectPage();
  }

  function onDeleteTask(deletedTaskId) {
    const project = projects.get(projectId);
    project.tasks.delete(deletedTaskId);
    refreshSingleProjectPage();
  }

  function onChecked(task, project, checked) {
    if (checked) {
      task.done = true;
      console.log(task);
    } else {
      task.done = false;
    }
  }

  destroySingleProjectPage = singleProjectPage(
    targetEl,
    projects,
    projectId,
    onAddTask,
    onDeleteTask,
    onChecked
  );

  return () => {
    destroySingleProjectPage();
  };
};

export default projectPageManager;
