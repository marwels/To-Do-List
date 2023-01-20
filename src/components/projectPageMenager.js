import singleProjectPage from "./singleProjectPage";

const projectPageMenager = function projectPageMenager(
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
      onAddTask
    );
  }

  function onAddTask(newTask) {
    const project = projects.get(projectId);
    project.tasks.set(String(Date.now()), newTask);
    // console.log({ project });
    // dodać odświeżanie
    refreshSingleProjectPage();
  }

  destroySingleProjectPage = singleProjectPage(
    targetEl,
    projects,
    projectId,
    onAddTask
  );

  return () => {
    destroySingleProjectPage();
  };
};

export default projectPageMenager;
