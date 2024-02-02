

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