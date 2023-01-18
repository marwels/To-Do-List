import "./style.css";

import storageAvailable from "./storageCheck";
import Header from "./components/Header";
import Left from "./components/left";
import allTasksPage from "./components/allTasksPage";

const App = function App(parentEl) {
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
      parentEl,
      projects,
      onAddProject,
      onDeleteProject,
      onChangeName
    );
  }

  function onAddProject(projectName) {
    console.log(`Add new project: ${projectName}`);

    // // very simple randomization in case of two projects with the same name
    // const identifier = function getRandomIntInclusive(min, max) {
    //   const Mmin = Math.ceil(min);
    //   const Mmax = Math.floor(max);
    //   return Math.floor(Math.random() * (Mmax - Mmin + 1) + Mmin); // The maximum is inclusive and the minimum is inclusive
    // };
    // const identifierForPush = identifier(1, 1000);

    // const forPush = `${projectName}${identifierForPush}`;
    const newProject = {
      name: projectName,
      tasks: new Map(),
    };
    projects.set(Date.now(), newProject);
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
  // document.createDocumentFragment

  destroyLeft = Left(
    parentEl,
    projects,
    onAddProject,
    onDeleteProject,
    onChangeName
  );

  const children = [
    Header(parentEl),
    () => {
      destroyLeft();
    },
    allTasksPage(parentEl),
    // Router(parentEl, [
    //   ["#Sweet", (targetEl) => PageSweet(targetEl)],
    //   ["#Savory", (targetEl) => PageSavory(targetEl)],
    //   ["#Contact", (targetEl) => PageContact(targetEl)],
    //   ["#Home", (targetEl) => PageHome(targetEl)],
    //   ["", (targetEl) => PageHome(targetEl)],
    // ]),
  ];

  return () => {
    children.forEach((destroy) => destroy());
  };
};

App(document.getElementById("content"));
