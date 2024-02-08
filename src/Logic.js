


export const copyText = (text) => {
    //Crear elemento de text temporal
    var inputTemporal = document.createElement("input");
    inputTemporal.setAttribute("value", text);
    document.body.appendChild(inputTemporal);

    //Selecciona el input text y lo copia
    inputTemporal.select();
    document.execCommand("copy");

    //Elimina el elemento temporal
    document.body.removeChild(inputTemporal);

    alert("Texto copiado al portapapeles: " + text);
}

export function cambiarEstiloOnScroll() {
    var elementoCambio = document.getElementById('nav-bar-main');
    var scrollActual = window.scrollY;

    // Cambiar clases basado en la posición de scroll
    if (scrollActual > 150) { // Cambiar estilos cuando el scroll pase cierta posición (por ejemplo, 100 píxeles)
      elementoCambio.classList.add('nav-bar-container-sticky');
      elementoCambio.classList.remove('nav-bar-container');
    } else {
      elementoCambio.classList.add('nav-bar-container');
      elementoCambio.classList.remove('nav-bar-container-sticky');
    }
  }

  window.addEventListener('scroll', cambiarEstiloOnScroll);
