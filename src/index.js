import "./style.css";

import storageAvailable from "./storageCheck";
import Header from "./components/Header";
import Left from "./components/left";
import Router from "./components/Router";
import homePage from "./components/home";
import projectManager from "./components/projectManager";
import singleProjectPage from "./components/singleProjectPage";
import tasksDisplayManager from "./components/tasksDisplayManager";
import allTasksPage from "./components/allTasksPage";
import todayPage from "./components/todayPage";
import next7Page from "./components/next7";
import importantPage from "./components/important";

const isStorageAvailable = storageAvailable("localStorage");

const App = function App(targetEl) {
  const projects = new Map();

  function restoreProject() {
    const restoredProjects = JSON.parse(localStorage.getItem("projects"));
    for (let i = 0; i < restoredProjects.length; i++) {
      let ID = restoredProjects[i][0];
      let project = restoredProjects[i][1];

      const tasks = new Map();
      project.tasks.forEach(([taskId, task]) => {
        tasks.set(taskId, {
          ...task,
          date: new Date(task.date)
        });
      });

      projects.set(ID, {
        ...project,
        tasks,
      });
    }
    console.log(projects);
  }

  restoreProject();

  let destroyLeft;

  function refreshLeft() {
    destroyLeft();
    destroyLeft = Left(
      targetEl,
      projects,
      onAddProject,
      onDeleteProject,
      onChangeName
    );
  }

  function onProjectChanged() {
    if (!isStorageAvailable) return;
    localStorage.setItem(
      "projects",
      JSON.stringify(
        Array.from(projects.entries()).map(([projectId, project]) => [
          projectId,
          {
            ...project,
            tasks: Array.from(project.tasks.entries()),
          },
        ])
      )
    );
  }

  function onAddProject(projectName) {
    const newProject = {
      name: projectName,
      tasks: new Map(),
    };
    projects.set(String(Date.now()), newProject);
    onProjectChanged();
    refreshLeft();
  }

  function onDeleteProject(projectId) {
    projects.delete(projectId);
    onProjectChanged();
    refreshLeft();
  }

  function onChangeName(projectId, newName) {
    const project = projects.get(projectId);
    project.name = newName;
    onProjectChanged();
    refreshLeft();
  }

  destroyLeft = Left(
    targetEl,
    projects,
    onAddProject,
    onDeleteProject,
    onChangeName
  );

  const children = [
    Header(targetEl),
    () => {
      destroyLeft();
    },
    Router(targetEl, [
      [
        "allTasks",
        (targetEl) =>
          tasksDisplayManager(
            targetEl,
            projects,
            onProjectChanged,
            allTasksPage
          ),
      ],
      [
        "today",
        (targetEl) =>
          tasksDisplayManager(targetEl, projects, onProjectChanged, todayPage),
      ],
      [
        "next7",
        (targetEl) =>
          tasksDisplayManager(targetEl, projects, onProjectChanged, next7Page),
      ],
      [
        "important",
        (targetEl) =>
          tasksDisplayManager(
            targetEl,
            projects,
            onProjectChanged,
            importantPage
          ),
      ],
      [
        "project/:projectId",
        (targetEl, params) =>
          projectManager(
            targetEl,
            projects,
            params.projectId,
            onProjectChanged,
            singleProjectPage
          ),
        // projectManager(
        //   targetEl,
        //   projects,
        //   params.projectId,
        //   (
        //     targetEl,
        //     projects,
        //     projectId,
        //     onAddTask,
        //     onDeleteTask,
        //     onChecked
        //   ) =>
        //     projectPage(
        //       targetEl,
        //       projects,
        //       projectId,
        //       onAddTask,
        //       onDeleteTask,
        //       onChecked,
        //       wlaczJakasFunkcje,
        //       pokazCos,
        //       jakisFiltrTaskow
        //     )
        // ),
      ],
      ["", (targetEl) => homePage(targetEl)],
      // ["today", (targetEl) => TodayPage(targetEl)],
    ]),
  ];

  return () => {
    children.forEach((destroy) => destroy());
  };
};

App(document.getElementById("content"));
