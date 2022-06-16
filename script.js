let style = getComputedStyle(document.body);

let lightSwitch = (e) => {
  if (e.classList.contains("btn-on")) {
    e.classList.remove("btn-on");
    e.classList.add("btn-off");
    e.innerText = "關燈";

    document.querySelector("#light-off").classList.remove("pic-show");
    document.querySelector("#light-on").classList.add("pic-show");
    // document.querySelector("body").style.backgroundColor = style.getPropertyValue("--dracula-orange");
  } else {
    e.classList.remove("btn-off");
    e.classList.add("btn-on");
    e.innerText = "開燈";
    // document.querySelector("body").style.backgroundColor = style.getPropertyValue("--dracula-black");

    document.querySelector("#light-on").classList.remove("pic-show");
    document.querySelector("#light-off").classList.add("pic-show");
    // document.querySelector("body").style.backgroundColor = "blue";
  }
};
