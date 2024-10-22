export const createButton = (text, className) => {
  const button = document.createElement("button");
  button.textContent = text;
  button.classList.add(className);
  return button;
};

export const createModal = () => {
  const divModal = document.createElement("div");
  divModal.className = "modal";
  const divModalContent = document.createElement("div");
  divModalContent.className = "modal-content";
  const h2Modal = document.createElement("h2");
  h2Modal.textContent = "Results";
  const spanModal = document.createElement("span");
  spanModal.className = "modal-close";
  spanModal.textContent = "X";
  const hrModal = document.createElement("hr");
  const pModal = document.createElement("p");

  divModalContent.appendChild(h2Modal);
  divModalContent.appendChild(hrModal);
  divModalContent.appendChild(pModal);
  divModalContent.appendChild(spanModal);
  divModal.appendChild(divModalContent);

  return divModal;
};
