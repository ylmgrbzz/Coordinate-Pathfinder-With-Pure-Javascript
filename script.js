document.addEventListener("DOMContentLoaded", function () {
  let initialX = 0;
  let initialY = 0;
  let currentX = 0;
  let currentY = 0;
  let routeInput = "";

  document.getElementById("startX").addEventListener("input", function (e) {
    initialX = parseInt(e.target.value, 10);
  });

  document.getElementById("startY").addEventListener("input", function (e) {
    initialY = parseInt(e.target.value, 10);
  });

  document.getElementById("routeInput").addEventListener("input", function (e) {
    routeInput = e.target.value;
  });

  window.handleCalculateRoute = function () {
    currentX = initialX;
    currentY = initialY;

    const instructions = routeInput.split(",");

    for (let i = 0; i < instructions.length; i++) {
      const [direction, value] = instructions[i].trim().split(" ");

      switch (direction.toLowerCase()) {
        case "kuzey":
          currentY += parseInt(value, 10);
          break;
        case "güney":
          currentY -= parseInt(value, 10);
          break;
        case "doğu":
          currentX += parseInt(value, 10);
          break;
        case "batı":
          currentX -= parseInt(value, 10);
          break;
        default:
          break;
      }
    }

    document.getElementById("startXResult").innerText = initialX;
    document.getElementById("startYResult").innerText = initialY;
    document.getElementById("finalXResult").innerText = currentX;
    document.getElementById("finalYResult").innerText = currentY;
  };
});
