import "./style.css";

import storageAvailable from "./storageCheck";
import Header from "./components/header";
import Left from "./components/left";
import AllTasksPage from "./components/AllTasksPage";

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

  let projects = [];

  function onAddProject(projectName) {
    console.log(`Add new project: ${projectName}`);
    projects.push(projectName);
    console.log(`projects: ${projects}`);
  }

  // document.createDocumentFragment

  const children = [
    Header(parentEl),
    Left(parentEl, projects, onAddProject),
    AllTasksPage(parentEl),
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
