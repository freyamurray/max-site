function darkMode() {
    // ensure we reference the actual button element (was undefined before)
    const button = document.getElementById("theme-switch");
    const isDark = document.body.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    if (button) button.textContent = isDark ? "light" : "dark";
}

// Apply saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const button = document.getElementById("theme-switch");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        if (button) button.textContent = "light";
    } else {
        if (button) button.textContent = "dark";
    }
});

function selectPage(event, pageName) {
    var i, page, tab;

    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
        tab[i].classList.remove("active");
    };

    page = document.getElementsByClassName("page");
    for (i = 0; i < page.length; i++) {
        page[i].style.display = "none";
    };

    document.getElementById(pageName).style.display = "block";
    event.currentTarget.classList.add("active");
}