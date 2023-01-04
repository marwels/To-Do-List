const Header = function Header(targetEl) {
  const headerContainer = document.createElement("div");
  headerContainer.className = "headerContainer";

  const hamburger = document.createElement("div");
  hamburger.className = "hamburger";

  const TitleBox = document.createElement("div");
  TitleBox.className = "TitleBox";

  const icon = document.createElement("div");
  icon.className = "toDoIcon";

  const what = document.createElement("div");
  what.className = "what_logo";
  what.innerText = "What";

  const toDo = document.createElement("div");
  toDo.className = "toDo_logo";
  toDo.innerText = "ToDo";

  TitleBox.appendChild(icon);
  TitleBox.appendChild(what);
  TitleBox.appendChild(toDo);

  headerContainer.appendChild(hamburger);
  headerContainer.appendChild(TitleBox);

  targetEl.appendChild(headerContainer);

  return () => {
    targetEl.removeChild(headerContainer);
  };
};

export { Header };
