/*
document.addEventListener("DOMContentLoaded", () => {
  const btnModoOscuro = document.getElementById("toggle-dark");
  const labelModoOscuro = document.getElementById("label-DarkMode");
  btnModoOscuro.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Cambiar el ícono del botón según el modo
    if (document.body.classList.contains("dark-mode")) {
      labelModoOscuro.textContent = "☀️";
    } else {
      labelModoOscuro.textContent = "🌙";
    }
  });
});

*/

document.addEventListener("DOMContentLoaded", () => {
  const btnModoOscuro = document.getElementById("toggle-dark");
  const labelModoOscuro = document.getElementById("label-DarkMode");

  // Funciones para manejar cookies
  function setCookie(nombre, valor, dias) {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    document.cookie = `${nombre}=${valor}; expires=${fecha.toUTCString()}; path=/`;
  }

  function getCookie(nombre) {
    const nameEQ = nombre + "=";
    const ca = document.cookie.split(';');
    for (let c of ca) {
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  // Al cargar, aplicar modo oscuro si la cookie lo indica
  if (getCookie("modo") === "oscuro") {
    document.body.classList.add("dark-mode");
    labelModoOscuro.textContent = "☀️";
  }

  btnModoOscuro.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const modo = document.body.classList.contains("dark-mode") ? "oscuro" : "claro";
    setCookie("modo", modo, 1);

    // Cambiar el ícono
    labelModoOscuro.textContent = modo === "oscuro" ? "☀️" : "🌙";
  });
});