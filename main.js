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
/* ===== Gallery click → view full image (no HTML/CSS edit) ===== */
document.addEventListener("click", function (e) {
  const box = e.target.closest(".img-box");
  if (!box) return;

  const bg = box.style.backgroundImage;
  if (!bg) return;

  const url = bg.slice(5, -2); // lấy link trong url("...")

  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.inset = "0";
  overlay.style.background = "rgba(0,0,0,.9)";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.zIndex = "99999";
  overlay.style.cursor = "zoom-out";

  const img = document.createElement("img");
  img.src = url;
  img.style.maxWidth = "95vw";
  img.style.maxHeight = "95vh";
  img.style.objectFit = "contain";
  img.style.boxShadow = "0 0 40px rgba(0,0,0,.6)";
  img.draggable = false;

  overlay.appendChild(img);
  document.body.appendChild(overlay);

  overlay.addEventListener("click", () => overlay.remove());
});
/* ===============================
   LANGUAGE TOGGLE VI / EN
   =============================== */

document.addEventListener("DOMContentLoaded", () => {
  let currentLang = "vi";

  const toggleBtn = document.getElementById("langToggle");
  if (!toggleBtn) return;

  const translatableElements = document.querySelectorAll("[data-vi]");

  toggleBtn.addEventListener("click", () => {
    currentLang = currentLang === "vi" ? "en" : "vi";

    translatableElements.forEach(el => {
      el.textContent = el.getAttribute(`data-${currentLang}`);
    });

    toggleBtn.textContent = currentLang === "vi" ? "EN" : "VI";
    document.documentElement.lang = currentLang;
  });
});
