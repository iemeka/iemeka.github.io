const modeSwitch = document.querySelector(".display-mode");

const handleClick = (e) => {
  document.documentElement.classList.toggle("lightmode-max");
};

modeSwitch.addEventListener("click", handleClick);
