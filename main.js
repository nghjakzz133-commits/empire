const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

/* Bật / tắt menu */
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

/* Bấm link thì tự đóng menu */
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});

/* Click ra ngoài menu thì đóng */
document.addEventListener("click", (e) => {
  if (
    navMenu.classList.contains("active") &&
    !navMenu.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    navMenu.classList.remove("active");
    document.body.classList.remove("menu-open");
  }
});
