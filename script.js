document.addEventListener("DOMContentLoaded", function () {
    buscarCotacao();
    darkModeToggle();
});

function calcularMilheiro() {
    let milhasMensais = parseFloat(document.getElementById("milhasMensais").value);
    let custoMensal = parseFloat(document.getElementById("custoMensal").value);

    if (isNaN(milhasMensais) || isNaN(custoMensal)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    let milhasAnuais = milhasMensais * 12;
    let custoAnual = custoMensal * 12;
    let custoMilheiro = (custoAnual / (milhasAnuais * 0.001)).toFixed(2);

    document.getElementById("resultado").innerHTML = `Custo do Milheiro: <strong>R$ ${custoMilheiro}</strong>`;
}

// Modo escuro
function darkModeToggle() {
    const button = document.getElementById("darkModeToggle");
    button.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            document.documentElement.style.setProperty('--bg-color', '#ffffff');
            document.documentElement.style.setProperty('--text-color', '#000000');
        } else {
            document.documentElement.style.setProperty('--bg-color', '#0d0d0d');
            document.documentElement.style.setProperty('--text-color', '#ffffff');
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const switchButton = document.getElementById("darkModeSwitch");
    const isDarkMode = localStorage.getItem("darkMode") === "enabled";

    if (isDarkMode) {
        document.body.classList.add("dark-mode");
        switchButton.checked = true;
    }

    switchButton.addEventListener("change", function () {
        if (switchButton.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
        }
    });
});
