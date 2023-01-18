const Router = function Router(parentEl, routes) {
  let currentRoute = window.location.hash;
  let destroy;

  function selectRoute() {
    if (currentRoute.includes("project")) {
      console.log("route project!");
    }
    let targetRoute = routes.find((route) => route[0] === currentRoute);
    if (currentRoute.includes("project")) {
      console.log("route project!");
    }
    if (!targetRoute) {
      targetRoute = routes.find((route) => route[0] === "");
    }

    return targetRoute;
  }

  function renderComponent(component) {
    if (destroy) destroy();
    destroy = component(parentEl);
  }

  function onHashChange() {
    currentRoute = window.location.hash;
    const nextRoute = selectRoute();
    renderComponent(nextRoute[1]);
  }
  onHashChange();

  window.addEventListener("hashchange", onHashChange);

  return () => {
    destroy();
    window.removeEventListener("hashchange", onHashChange);
  };
};

export default Router;
