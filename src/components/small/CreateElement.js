const CreateElement = function CreateElement(
  targetEl,
  type,
  className,
  innerText
) {
  const element = document.createElement(type);
  element.className = className;
  if (innerText) {
    element.innerText = innerText;
  }
  targetEl.appendChild(element);

  return () => {
    targetEl.removeChild(element);
  };
};

export default CreateElement;
