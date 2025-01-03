document.addEventListener("DOMContentLoaded", function () {
    const switchButton = document.getElementById("darkModeSwitch");
    const isDarkMode = localStorage.getItem("darkMode") === "enabled";

    if (isDarkMode) {
        document.body.classList.add("dark-mode");
        switchButton.checked = true;
        document.documentElement.style.setProperty('--bg-color', '#ffffff');
        document.documentElement.style.setProperty('--text-color', '#000000');
    }

    switchButton.addEventListener("change", function () {
        if (switchButton.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
            document.documentElement.style.setProperty('--bg-color', '#ffffff');
            document.documentElement.style.setProperty('--text-color', '#000000');
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
            document.documentElement.style.setProperty('--bg-color', '#0d0d0d');
            document.documentElement.style.setProperty('--text-color', '#ffffff');
        }
    });
});

function calcularMilheiro() {
    let milhasMensais = parseFloat(document.getElementById("milhasMensais").value.replace(',', '.'));
    let custoMensal = parseFloat(document.getElementById("custoMensal").value.replace(',', '.'));

    if (isNaN(milhasMensais) || isNaN(custoMensal)) {
        alert("Por favor, preencha todos os campos corretamente usando números.");
        return;
    }

    let milhasAnuais = milhasMensais * 12;
    let custoAnual = custoMensal * 12;
    let custoMilheiro = (custoAnual / (milhasAnuais * 0.001)).toFixed(2);

    document.getElementById("resultado").innerHTML = `Custo do Milheiro: <strong>R$ ${custoMilheiro}</strong>`;
}

function gerarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const milhasMensais = document.getElementById("milhasMensais").value;
    const custoMensal = document.getElementById("custoMensal").value;
    const resultado = document.getElementById("resultado").innerText;

    doc.text(`Milhas mensais: ${milhasMensais}`, 10, 10);
    doc.text(`Custo mensal: R$ ${custoMensal}`, 10, 20);
    doc.text(resultado, 10, 30);

    doc.save("calculo_milheiro.pdf");
}
