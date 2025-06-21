document.addEventListener("DOMContentLoaded", function () {
  // Configuração da música
  const music = document.getElementById("background-music");
  music.volume = 0.3;

  // Reproduz música após interação do usuário
  function startMusic() {
    music.play().catch((e) => console.log("Reprodução automática bloqueada"));
    document.removeEventListener("click", startMusic);
  }

  document.addEventListener("click", startMusic);

  // Criação de estrelas, corações e flores animados
  const container = document.getElementById("stars");
  const symbols = ["✨", "💖", "🌸", "💛", "🌹", "💕", "🌟", "🌠"];

  for (let i = 0; i < 100; i++) {
    createFallingElement(container, symbols, "star");
  }

  // Criação da chuva de "Eu te amo"
  const loveRain = document.getElementById("loveRain");
  const lovePhrases = [
    "Eu te amo",
    "I love you",
    "Je t'aime",
    "Ti amo",
    "愛してる",
    "Te amo",
    "Ich liebe dich",
    "사랑해",
  ];

  // Cria várias palavras de amor inicialmente
  for (let i = 0; i < 30; i++) {
    setTimeout(() => createLoveWord(loveRain, lovePhrases), i * 300);
  }

  // Continua criando novas palavras periodicamente
  setInterval(() => createLoveWord(loveRain, lovePhrases), 300);
});

function createFallingElement(container, symbols, className) {
  const item = document.createElement("div");
  item.className = className;
  item.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  item.style.left = `${Math.random() * 100}%`;
  item.style.top = `${Math.random() * -20}%`;
  item.style.animationDuration = `${5 + Math.random() * 15}s`;
  item.style.animationDelay = `${Math.random() * 10}s`;
  item.style.fontSize = `${15 + Math.random() * 25}px`;
  item.style.opacity = `${0.3 + Math.random() * 0.7}`;
  container.appendChild(item);

  // Remove após a animação terminar
  setTimeout(() => {
    item.remove();
  }, 20000);
}

function createLoveWord(container, phrases) {
  const word = document.createElement("div");
  word.className = "love-word";
  word.textContent = phrases[Math.floor(Math.random() * phrases.length)];
  word.style.left = `${Math.random() * 100}%`;
  word.style.animationDuration = `${5 + Math.random() * 10}s`;
  word.style.animationDelay = `${Math.random() * 5}s`;
  word.style.fontSize = `${15 + Math.random() * 20}px`;
  word.style.opacity = `${0.5 + Math.random() * 0.5}`;
  container.appendChild(word);

  // Remove após a animação terminar
  setTimeout(() => {
    word.remove();
  }, 15000);
}
