// Elementos del DOM
const outputMessage = document.getElementById('outputMessage'); // Mensaje de salida
const outputText = document.getElementById('outputText'); // Texto de salida
const copyButton = document.getElementById('copyButton'); // Botón de copiar
const inputTextElement = document.getElementById('inputText'); // Entrada de texto

// Función para mostrar un mensaje en los elementos de salida
function showMessage(message) {
    outputMessage.textContent = message;
    outputText.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
    copyButton.style.display = "none"; // Ocultar el botón de copiar
}

// Función para encriptar el texto ingresado
function encryptText() {
    const inputText = inputTextElement.value.trim(); // Obtener el texto de entrada y eliminar espacios en blanco al inicio y al final
    if (inputText === "") { // Verificar si el texto está vacío
        showMessage("Ningún mensaje fue encontrado"); // Mostrar un mensaje de error
        return;
    }

    const encryptedText = encryptVocals(inputText); // Encriptar el texto
    outputMessage.textContent = encryptedText; // Mostrar el texto encriptado en el mensaje de salida
    outputText.textContent = encryptedText; // Mostrar el texto encriptado en el área de texto de salida
    copyButton.style.display = "inline-block"; // Mostrar el botón de copiar

    inputTextElement.value = ""; // Limpiar el campo de entrada
}

// Función para desencriptar el texto ingresado
function decryptText() {
    const inputText = inputTextElement.value.trim(); // Obtener el texto de entrada y eliminar espacios en blanco al inicio y al final
    if (inputText === "") { // Verificar si el texto está vacío
        showMessage("Ningún mensaje fue encontrado"); // Mostrar un mensaje de error
        return;
    }

    const decryptedText = decryptVocals(inputText); // Desencriptar el texto
    outputMessage.textContent = decryptedText; // Mostrar el texto desencriptado en el mensaje de salida
    outputText.textContent = decryptedText; // Mostrar el texto desencriptado en el área de texto de salida
    copyButton.style.display = "inline-block"; // Mostrar el botón de copiar

    inputTextElement.value = ""; // Limpiar el campo de entrada
}

// Función para copiar el texto encriptado/desencriptado al portapapeles
function copyText() {
    const outputTextValue = outputText.textContent; // Obtener el texto de salida
    navigator.clipboard.writeText(outputTextValue).then(() => { // Copiar el texto al portapapeles
        alert('Texto copiado al portapapeles'); // Mostrar un mensaje de éxito
    });
}

// Objeto que mapea las vocales a sus valores encriptados
const vowelMap = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

// Función para encriptar las vocales del texto
function encryptVocals(text) {
    return text.split('').map(char => vowelMap[char] || char).join(''); // Mapear y unir las vocales encriptadas
}

// Función para desencriptar las vocales del texto encriptado
function decryptVocals(text) {
    return text.replace(/enter|imes|ai|ober|ufat/g, match => { // Reemplazar las palabras encriptadas con las vocales originales
        switch (match) {
            case "enter":
                return "e";
            case "imes":
                return "i";
            case "ai":
                return "a";
            case "ober":
                return "o";
            case "ufat":
                return "u";
            default:
                return match;
        }
    });
}
