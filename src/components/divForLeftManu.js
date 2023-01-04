const divForLeftMenu = function divForLeftMenu(
  targetEl,
  className,
  icon,
  innerText
) {
  const container = document.createElement("div");
  container.className = className;

  const iconContainer = document.createElement("div");
  iconContainer.className = `icon ${className} material-symbols-outlined`;
  iconContainer.innerText = icon;
  container.appendChild(iconContainer);

  const menuItem = document.createElement("p");
  menuItem.className = `menuItem ${className}`;
  menuItem.innerText = innerText;
  container.appendChild(menuItem);

  targetEl.appendChild(container);

  return () => {
    targetEl.removeChild(container);
  };
};

export { divForLeftMenu };
