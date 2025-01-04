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

function calcularMilheiro() {
    let milhasMensais = parseFloat(document.getElementById("milhasMensais").value.replace(',', '.'));
    let custoMensal = parseFloat(document.getElementById("custoMensal").value.replace(',', '.'));
    let bonusMilhas = parseFloat(document.getElementById("bonusMilhas").value.replace(',', '.')) || 0;

    if (isNaN(milhasMensais) || isNaN(custoMensal)) {
        alert("Por favor, preencha todos os campos corretamente usando números.");
        return;
    }

    let milhasAnuais = (milhasMensais * 12) + bonusMilhas;
    let custoAnual = custoMensal * 12;
    let custoMilheiro = (custoAnual / (milhasAnuais * 0.001)).toFixed(2);

    document.getElementById("resultado").innerHTML = `Custo do Milheiro: <strong>R$ ${custoMilheiro}</strong>`;
    document.getElementById("totalAnual").innerHTML = `Total Anual de Milhas: <strong>${milhasAnuais}</strong>`;
}

function gerarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const milhasMensais = document.getElementById("milhasMensais").value;
    const custoMensal = document.getElementById("custoMensal").value;
    const bonusMilhas = document.getElementById("bonusMilhas").value;
    const resultado = document.getElementById("resultado").innerText;
    const totalAnual = document.getElementById("totalAnual").innerText;

    doc.text(`Milhas mensais: ${milhasMensais}`, 10, 10);
    doc.text(`Custo mensal: R$ ${custoMensal}`, 10, 20);
    doc.text(`Bônus anual de milhas: ${bonusMilhas}`, 10, 30);
    doc.text(resultado, 10, 40);
    doc.text(totalAnual, 10, 50);

    doc.save("calculo_milheiro.pdf");
}

