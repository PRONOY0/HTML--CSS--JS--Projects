const LTD = () => {
    let a = document.body;
    a.classList.toggle("dark-mode")
}

let darkTheme = document.getElementById("toggle-switch");
darkTheme.addEventListener('click',LTD);
