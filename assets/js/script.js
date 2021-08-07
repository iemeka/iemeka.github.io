const modeCase = document.querySelector(".mode-case");
const states = ["lightmode-max", null, "lightmode", null];
let mode = 1;
const handleClick = (e) => {
  document.documentElement.classList.remove(states[mode]);
  mode = (mode + 1) % states.length;
  document.documentElement.classList.add(states[mode]);
};
modeCase.addEventListener("click", handleClick);
