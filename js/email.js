document.querySelector(".site-form").addEventListener("submit", (event) => {
  event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

  const url = "https://mi-perfil-back.vercel.app/send-message"; // URL de la API a la que deseas hacer la solicitud POST

  const formData = new FormData(event.target); // Obtener los datos del formulario

  /*fetch(url, {
        method: "POST",
        body
    })
      .post(url, formData)
      .then((response) => {
        console.log("Message sent successfully");
        // Aquí puedes agregar el código para mostrar una confirmación de envío exitoso o realizar otras acciones necesarias
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        // Aquí puedes agregar el código para mostrar un mensaje de error o realizar otras acciones necesarias
      });*/

  var object = {};
  formData.forEach(function (value, key) {
    object[key] = value;
  });
  var json = JSON.stringify(object);

  fetch(url, {
    method: "POST",
    body: json,
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log([event.target]);
});
