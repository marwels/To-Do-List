const homePage = function homePage(targetEl) {
  const homePageContainer = document.createElement("div");
  homePageContainer.className = "homePageContainer";

  const welcomeTitle = document.createElement("h2");
  welcomeTitle.innerText = "Hi! Welcome to WhatToDo App!";
  homePageContainer.appendChild(welcomeTitle);
  const welcomeText = document.createElement("p");
  welcomeText.innerText =
    "Everything you need, is to be found in the menu on your left.";
  homePageContainer.appendChild(welcomeText);
  const welcomeText2 = document.createElement("p");
  welcomeText2.innerText = "Start with creating your first project:)";
  homePageContainer.appendChild(welcomeText2);

  targetEl.appendChild(homePageContainer);

  return () => {
    targetEl.removeChild(homePageContainer);
  };
};

export default homePage;
