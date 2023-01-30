import next7Page from "./next7";

const next7PageManager = function next7PageManager(targetEl, projects) {
  let destroyNext7Page;

  function refreshNext7() {
    destroyNext7Page();
    destroyNext7Page = next7Page(targetEl, projects, onDeleteTask, onChecked);
  }

  function onDeleteTask(deletedTaskId, project) {
    project.tasks.delete(deletedTaskId);
    refreshNext7();
  }

  function onChecked(task, project, checked) {
    if (checked) {
      task.done = true;
    } else {
      task.done = false;
    }
  }

  destroyNext7Page = next7Page(targetEl, projects, onDeleteTask, onChecked);

  return () => {
    destroyNext7Page();
  };
};

export default next7PageManager;
