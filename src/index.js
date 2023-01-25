import "./style.css";

import storageAvailable from "./storageCheck";
import Header from "./components/Header";
import Left from "./components/left";
import allTasksPage from "./components/allTasksPage";
import Router from "./components/Router";
import homePage from "./components/home";
import singleProjectPage from "./components/singleProjectPage";
import projectPageMenager from "./components/projectPageMenager";
import todayPage from "./todayPage";
import allTasksPageManager from "./components/allTasksPageManager";

const App = function App(targetEl) {
  if (storageAvailable("localStorage")) {
    // Yippee! We can use localStorage awesomeness
    // if (!localStorage.getItem("bgcolor")) {
    //   populateStorage();
    // } else {
    //   setStyles();
    // }
  } else {
    // Too bad, no localStorage for us
  }

  const projects = new Map();

  let destroyLeft;

  function refreshLeft() {
    destroyLeft();
    // eslint-disable-next-line no-use-before-define
    destroyLeft = Left(
      targetEl,
      projects,
      onAddProject,
      onDeleteProject,
      onChangeName
    );
  }

  function onAddProject(projectName) {
    const newProject = {
      name: projectName,
      tasks: new Map(),
    };
    projects.set(String(Date.now()), newProject);
    refreshLeft();
  }

  function onDeleteProject(projectId) {
    projects.delete(projectId);
    refreshLeft();
  }

  function onChangeName(projectId, newName) {
    const project = projects.get(projectId);
    project.name = newName;
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
      ["allTasks", (targetEl) => allTasksPageManager(targetEl, projects)],
      ["today", (targetEl) => todayPage(targetEl, projects)],
      [
        "project/:projectId",
        (targetEl, params) =>
          projectPageMenager(targetEl, projects, params.projectId),
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
