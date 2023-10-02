const intersectionPoint = 112;
let viewedElements = ["about"];
let unseenElements = [
  "projects",
  "experience",
  "education",
  "henry-projects",
];
let actualElement = "about";

function scrollHandler() {
  if (unseenElements.length) {
    const element = document.getElementById(unseenElements[0]);
    const distance = element.getBoundingClientRect().top;

    if (distance <= intersectionPoint) {
      viewedElements.unshift(unseenElements.shift());
      if (actualElement !== viewedElements[0]) {
        document.getElementById(`a_${actualElement}`).className = ""
        actualElement = viewedElements[0];
        document.getElementById(`a_${actualElement}`).className = "actived"
      }
    }
  }
  if (viewedElements.length) {
    const element = document.getElementById(viewedElements[0]);
    const distance = element.getBoundingClientRect().top;

    if (
      distance > intersectionPoint ||
      (viewedElements[0] === "about" && distance > intersectionPoint - 6)
    ) {
      unseenElements.unshift(viewedElements.shift());
      if (actualElement !== unseenElements[0]) {
        document.getElementById(`a_${actualElement}`).className = ""
        actualElement = unseenElements[0];
        document.getElementById(`a_${actualElement}`).className = "actived"
      }
    }
  }
}

window.addEventListener("scroll", scrollHandler);