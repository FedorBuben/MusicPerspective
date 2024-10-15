$(document).ready(function () {
  document.getElementById("gyroscope_alpha").innerText = "Ready";
  window.addEventListener("deviceorientation", function (event) {
    document.getElementById("gyroscope_alpha").innerText = "Action";
    if (event && event.alpha) {
      master_angle = event.alpha.toFixed(2);
      document.getElementById("gyroscope_alpha").innerText = master_angle;
      update_pannings();
    }
  });
});
