const start = document.getElementById("start");
const stop = document.getElementById("stop");

function randamColor() {
  let hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

let intervalId;
function startBackgroundColor() {
  if (!intervalId) {
    intervalId = setInterval(changeColor, 1000);
  }

  function changeColor() {
    // console.log(randamColor());
    document.body.style.backgroundColor = randamColor();
  }
}

function stopBackgroundColor() {
  clearInterval(intervalId);
  intervalId = null;
}

start.addEventListener("click", startBackgroundColor);
stop.addEventListener("click", stopBackgroundColor);
