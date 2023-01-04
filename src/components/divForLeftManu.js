const divForLeftMenu = function divForLeftMenu(
  targetEl,
  className,
  icon,
  innerText,
  onClick
) {
  const container = document.createElement("div");
  container.className = `divForLeftMenu ${className}`;

  const iconContainer = document.createElement("div");
  iconContainer.className = `icon ${className} material-symbols-outlined`;
  iconContainer.innerText = icon;
  container.appendChild(iconContainer);

  const menuItem = document.createElement("p");
  menuItem.className = `menuItem ${className}`;
  menuItem.innerText = innerText;
  container.appendChild(menuItem);

  targetEl.appendChild(container);

  if (onClick) {
    container.addEventListener("click", onClick);
  }

  return () => {
    targetEl.removeChild(container);
  };
};

export { divForLeftMenu };
