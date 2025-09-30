document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("ul.navbar li a");
  const currentPath = window.location.pathname.split("/").pop();

  links.forEach(link => {
    const href = link.getAttribute("href").split("/").pop();
    if (href === currentPath) {
      link.classList.add("active");
    }
  });
});
