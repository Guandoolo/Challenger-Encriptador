// Mapeo de caracteres para encriptar y desencriptar
const encriptarMapa = {
  'e': 'enter',
  'i': 'imes',
  'a': 'ai',
  'o': 'ober',
  'u': 'ufat'
};

// Crear un mapa inverso para desencriptar
const desencriptarMapa = {
  'enter': 'e',
  'imes': 'i',
  'ai': 'a',
  'ober': 'o',
  'ufat': 'u'
};

// Función para encriptar el texto
function encriptar(texto) {
  return texto.split('').map(caracter => encriptarMapa[caracter] || caracter).join('');
}

// Función para desencriptar el texto
function desencriptar(texto) {
  return texto.replace(/enter|imes|ai|ober|ufat/g, match => desencriptarMapa[match]);
}

// Función para copiar el texto al portapapeles
function copiarAlPortapapeles(texto) {
  navigator.clipboard.writeText(texto).then(() => {
    alert('Texto copiado al portapapeles!');
  });
}

// Función para manejar el evento de clic en los botones
function manejarBotones() {
  const botonEncriptar = document.getElementById('botonEncriptar');
  const botonDesencriptar = document.getElementById('botonDesencriptar');
  const botonCopiar = document.getElementById('botonCopiar');
  const textoArea = document.getElementById('texto');
  const mensajeSalida = document.querySelector('.mensaje_salida');
  const pistaSalida = document.querySelector('.pista_salida');
  
  botonEncriptar.addEventListener('click', () => {
    const texto = textoArea.value.toLowerCase();
    if (/[^a-z]/.test(texto)) {
      mensajeSalida.textContent = 'Por favor, use solo letras minúsculas.';
      return;
    }
    const textoEncriptado = encriptar(texto);
    mensajeSalida.textContent = textoEncriptado;
    pistaSalida.textContent = '';
    botonCopiar.style.display = 'block'; // Mostrar el botón Copiar
  });

  botonDesencriptar.addEventListener('click', () => {
    const texto = textoArea.value.toLowerCase();
    if (/[^a-zenterimesaioberufat]/.test(texto)) {
      mensajeSalida.textContent = 'Texto inválido.';
      return;
    }
    const textoDesencriptado = desencriptar(texto);
    mensajeSalida.textContent = textoDesencriptado;
    pistaSalida.textContent = '';
    botonCopiar.style.display = 'block'; // Mostrar el botón Copiar
  });

  botonCopiar.addEventListener('click', () => {
    copiarAlPortapapeles(mensajeSalida.textContent);
  });
}

// Ejecutar cuando el contenido de la página esté cargado
document.addEventListener('DOMContentLoaded', manejarBotones);
