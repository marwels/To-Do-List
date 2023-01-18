const EditableButton = function EditableButton(
  parentEl,
  value,
  isEditable,
  onClick,
  onChangeName
) {
  let renderedElement;

  if (isEditable) {
    renderedElement = document.createElement("form");
    const input = document.createElement("input");
    input.type = "text";
    input.className = "projectName";
    input.value = value;
    renderedElement.addEventListener("submit", (e) => {
      e.preventDefault();
      onChangeName(input.value);
    });
    renderedElement.appendChild(input);
    parentEl.appendChild(renderedElement);
  } else {
    renderedElement = document.createElement("button");
    renderedElement.className = "projectName";
    renderedElement.innerText = value;
    renderedElement.addEventListener("click", onClick);
    parentEl.appendChild(renderedElement);
  }

  return () => {
    parentEl.removeChild(renderedElement);
  };
};

export default EditableButton;
