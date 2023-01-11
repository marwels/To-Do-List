import createElement from "./small/createElement";

const Header = function Header(targetEl) {
  const headerContainer = document.createElement("div");
  headerContainer.className = "headerContainer";

  const hamburger = document.createElement("div");
  hamburger.className = "hamburger material-symbols-outlined";
  hamburger.innerText = "menu";

  const TitleBox = document.createElement("div");
  TitleBox.className = "TitleBox";

  createElement(
    TitleBox,
    "div",
    "toDoIcon material-symbols-outlined",
    "done_all"
  );

  createElement(TitleBox, "div", "what_logo", "What");

  createElement(TitleBox, "div", "toDo_logo", "ToDo");

  headerContainer.appendChild(hamburger);
  headerContainer.appendChild(TitleBox);

  targetEl.appendChild(headerContainer);

  return () => {
    targetEl.removeChild(headerContainer);
  };
};

export default Header;
