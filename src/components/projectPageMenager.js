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
      onDeleteTask
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

  destroySingleProjectPage = singleProjectPage(
    targetEl,
    projects,
    projectId,
    onAddTask,
    onDeleteTask
  );

  return () => {
    destroySingleProjectPage();
  };
};

export default projectPageManager;
