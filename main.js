function darkMode() {
    const button = document.getElementById("theme-switch");
    const isDark = document.body.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    if (button) button.textContent = isDark ? "light" : "dark";
    
        // Toggle visibility of dark and light pictures based on theme
        const darkPic = document.getElementById("dark-pic");
        const lightPic = document.getElementById("light-pic");
        if (isDark) {
            if (darkPic) darkPic.style.display = "flex";
            if (lightPic) lightPic.style.display = "none";
        } else {
            if (darkPic) darkPic.style.display = "none";
            if (lightPic) lightPic.style.display = "flex";
        }

    const keithIcon = document.getElementsByClassName("keith-icon");
    keithIcon.classList.toggle("hidden");
}

// Apply saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const button = document.getElementById("theme-switch");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        if (button) button.textContent = "light";
            const darkPic = document.getElementById("dark-pic");
            const lightPic = document.getElementById("light-pic");
            if (darkPic) darkPic.style.display = "flex";
            if (lightPic) lightPic.style.display = "none";
    } else {
        if (button) button.textContent = "dark";
            const darkPic = document.getElementById("dark-pic");
            const lightPic = document.getElementById("light-pic");
            if (darkPic) darkPic.style.display = "none";
            if (lightPic) lightPic.style.display = "flex";
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