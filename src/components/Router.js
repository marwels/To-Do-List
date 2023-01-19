const Router = function Router(parentEl, routes) {
  let currentRoute = window.location.hash;
  let destroy;
  let currentParams = {};

  function selectRoute() {
    currentParams = {};
    let targetRoute = routes.find((route) => route[0] === currentRoute);
    if (targetRoute) return targetRoute;

    targetRoute = routes.find((route) => {
      if (route[0].indexOf(":") < 0) return false;

      const routeRegexTempl = route[0].replaceAll(
        /:([\d\w]+)/g,
        "(?<$1>[\\S]+)"
      );
      const routeRegex = new RegExp(routeRegexTempl);
      const match = currentRoute.match(routeRegex);
      if (!match) return false;

      currentParams = match.groups;

      return true;
    });
    if (targetRoute) return targetRoute;

    targetRoute = routes.find((route) => route[0] === "");

    return targetRoute;
  }

  function renderComponent(component) {
    if (destroy) destroy();
    destroy = component(parentEl, currentParams);
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
