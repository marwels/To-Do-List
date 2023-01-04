import "./style.css";

import { Header } from "./components/header";

const App = function App(parentEl) {
  const children = [
    Header(parentEl),
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
