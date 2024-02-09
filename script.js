function toggleMenu() {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("active");
}

// Selecione todos os itens do menu
const menuItems = document.querySelectorAll(".top-nav li a");

// Adicione um evento de clique para cada item do menu
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Fecha o menu quando um item é clicado
    const nav = document.querySelector(".nav");
    nav.classList.remove("active");
  });
});
