function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  const isOpen = menu.classList.contains("open");
  icon.setAttribute("aria-expanded", isOpen);
  if (isOpen) {
    document.addEventListener("click", closeMenuOnClickOutside);
  } else {
    document.removeEventListener("click", closeMenuOnClickOutside);
  }
}

function closeMenuOnClickOutside(event) {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  if (!menu.contains(event.target) && !icon.contains(event.target)) {
    menu.classList.remove("open");
    icon.classList.remove("open");
    icon.setAttribute("aria-expanded", "false");
    document.removeEventListener("click", closeMenuOnClickOutside);
  }
}

document.addEventListener("keydown", function (event) {
  const icon = document.querySelector(".hamburger-icon");
  if (event.key === "Escape") {
    const menu = document.querySelector(".menu-links");
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
      icon.classList.remove("open");
      icon.setAttribute("aria-expanded", "false");
      document.removeEventListener("click", closeMenuOnClickOutside);
    }
  }
  if ((event.key === "Enter" || event.key === " ") && document.activeElement === icon) {
    event.preventDefault();
    toggleMenu();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const icon = document.querySelector(".hamburger-icon");
  icon.setAttribute("role", "button");
  icon.setAttribute("aria-label", "Toggle menu");
  icon.setAttribute("aria-expanded", "false");
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkModeToggle");
  
  // Load user preference
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggle.checked = true;
  } else {
    document.body.classList.add("light-mode");
  }

  toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode", toggle.checked);
    document.body.classList.toggle("light-mode", !toggle.checked);

    // Save user preference
    localStorage.setItem("darkMode", toggle.checked ? "enabled" : "disabled");
  });
});
