// Criação de estrelas, corações e flores animados
const container = document.getElementById("stars");
const symbols = ["✨", "💖", "🌸"];

for (let i = 0; i < 150; i++) {
  const item = document.createElement("div");
  item.className = "star";
  item.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  item.style.left = `${Math.random() * 100}%`;
  item.style.top = `${Math.random() * -100}%`;
  item.style.animationDelay = `${Math.random() * 10}s`;
  container.appendChild(item);
}

function mostrarCartinha() {
  const cartinha = document.getElementById("cartinha");
  cartinha.style.display = "block";

  document.querySelector(".btn").style.display = "none";
  document.querySelector("h1").style.display = "none";
  document.querySelector("p").style.display = "none";

  // Espera um pouco e rola suavemente até a cartinha
  setTimeout(() => {
    cartinha.scrollIntoView({ behavior: "smooth" });
  }, 300);
}

// Iniciar a música no carregamento
window.addEventListener("load", () => {
  const music = document.getElementById("background-music");
  music.volume = 0.5;
  music.play().catch((error) => {
    console.log("A reprodução automática da música foi bloqueada.", error);
  });
});
