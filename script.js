const buttons = document.querySelectorAll(".ripple");

buttons.forEach((buttons) => {
  buttons.addEventListener("click", function (e) {
    e.stopPropagation();
    const x = e.clientX;
    const y = e.clientY;

    // console.log(x, y);

    const buttonTop = e.target.offsetTop; //offsetTop is a property
    const buttonLeft = e.target.offsetLeft;

    // console.log(buttonTop, buttonLeft);

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    // console.log(xInside, yInside);

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});

// Ripple on body click

document.body.addEventListener("click", function (e) {
  const x = e.clientX;
  const y = e.clientY;

  const circle = document.createElement("span");
  circle.classList.add("circle");
  circle.style.top = y + "px";
  circle.style.left = x + "px";
  circle.style.position = "fixed";
  circle.style.zIndex = 1;

  document.body.appendChild(circle);

  setTimeout(() => circle.remove(), 500);
});
