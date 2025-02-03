// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Bienvenida a las primeras 35 razones de por qué te amo", time: 15 },
  { text: "Por tu sonrisa", time: 20 },
  { text: "Por tus ojos", time: 25 },
  { text: "Por tu cabello", time: 30 },
  { text: "Por tu lindura", time: 35 },
  { text: "Por tu personalidad", time: 40 },
  { text: "Por tu manera de ser", time: 45 },
  { text: "Por acompañarme", time: 50 },
  { text: "Por quererme", time: 55 },
  { text: "Por amarme", time: 60 },
  { text: "Por estar en las buenas", time: 65 },
  { text: "Por estar en las malas", time: 70 },
  { text: "Por apoyarme", time: 75 },
  { text: "Por ayudarme", time: 80 },
  { text: "Por reir junto a mi", time: 85 },
  { text: "Por estar pendiente de todo", time: 90 },
  { text: "Por querer tener una familia", time: 95 },
  { text: "Por ser única", time: 100 },
  { text: "Por ser Original", time: 105 },
  { text: "Por estar orgullosa de mi", time: 110 },
  { text: "Por aplaudir mis triunfos", time: 115 },
  { text: "Por tener las mismas metas que yo", time: 120 },
  { text: "Por escribirme esa primera vez", time: 125 },
  { text: "Por salir conmigo", time: 130 },
  { text: "Por aceptarme como soy", time: 135 },
  { text: "Por enamorarme", time: 140 },
  { text: "Por ser atenta", time: 145 },
  { text: "Por ser sincera", time: 150 },
  { text: "Por ser amable", time: 155 },
  { text: "Por ser dulce", time: 160 },
  { text: "Por ser carismática", time: 165 },
  { text: "Tu siempre serás mi paz y mi camino", time: 170 },
  { text: "Y quiero vivir mil aventuras contigo", time: 175 },
  { text: "Ah me faltó una cosa mas... ", time: 180 },
  { text: "¿Quieres ser mi San Valentin?", time: 185 },
  { text: "Anda di que si :)", time: 190 },
  { text: "Espero haberte sacado una sonrisa", time: 192 },
  { text: "¿Lo ves?... sonríes hermoso", time: 193 },




]

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);