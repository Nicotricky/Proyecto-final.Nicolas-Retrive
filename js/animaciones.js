$(document).ready(function () {
  //animacion titulo
  const title = $("#titulo");

  title.mouseover(function () {
    $(this).css({
      transform: "scale(1.2) rotate(2deg) ",
      background: "#911580",
      width: "300px",
      color: "#fff",
      margin: "0 auto",
      padding: "10px",
      transition: "500ms all",
    });
  });
  title.mouseout(function () {
    $(this).css({
      transform: "scale(1.0)",
      background: "none",
      width: "300px",
      color: "#000",
    });
  });

  //animacion boton carrito
  const button = $("#boton");
  button.mouseover(function () {
    $(this).css({
      width: "100px",
      background: "#20c997",
      border: "1px solid #20c997",
      transition: "500ms all",
    });
  });
  button.mouseout(function () {
    $(this).css({
      width: "40px",
      border: "1px solid #0d6efd",
      background: "#0d6efd",
      transition: "500ms all",
    });
  });

  //animacion servicios
  const service = $(".service-item");
  function inService() {
    $(this).css({
      background: "#741774",
      transform: "scale(0.85) rotate(5deg)",
      borderRadius: "35px 0px",
      transition: "300ms all",
    });
  }

  function outService() {
    $(this).css({
      background: "#96CEB4",
      transform: "scale(1.0) rotate(0deg)",
      borderRadius: "50%",
    });
  }
  service.hover(inService, outService);
});
