function darkMode() {
    document.body.classList.toggle("dark");
}

function selectPage(event, pageName) {
    var i, page, tab;

    tab = document.getElementsByClassName("tab");
    for (i=0; i<tab.length; i++) {
        tab[i].classList.remove("active");
    };

    page = document.getElementsByClassName("page");
    for (i=0; i<page.length; i++) {
        page[i].style.display="none";
    };

    document.getElementById(pageName).style.display = "block";
    event.currentTarget.classList.add("active");
}