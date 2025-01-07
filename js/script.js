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
    let milhasMensais = parseFloat(document.getElementById("milhasMensais").value) || 0;
    let custoMensal = parseFloat(document.getElementById("custoMensal").value) || 0;
    let bonusMilhas = parseFloat(document.getElementById("bonusMilhas").value) || 0;

    if (milhasMensais === 0 || custoMensal === 0) {
        alert("Por favor, preencha os campos de milhas mensais e custo mensal corretamente.");
        return;
    }

    let milhasAnuais = (milhasMensais * 12) + bonusMilhas;
    let custoAnual = custoMensal * 12;
    let custoMilheiro = (custoAnual / (milhasAnuais / 1000)).toFixed(2);

    document.getElementById("resultado").innerHTML = `Custo do Milheiro: <strong>R$ ${custoMilheiro}</strong>`;
    document.getElementById("totalAnual").innerHTML = milhasAnuais; // Mantendo um valor numérico puro

    return milhasAnuais; // Retorna o valor para reutilização
}

function calcularTransferenciaBonificada() {
    let quantidadeBonus = parseFloat(document.getElementById("quantidadeBonus").value) || 0;
    let bonusPercentual = parseFloat(document.getElementById("bonusInput").value) || 0;

    if (quantidadeBonus === 0 || bonusPercentual === 0) {
        alert("Preencha os campos de bônus corretamente.");
        return;
    }

    let totalMilhasGanhas = quantidadeBonus + (quantidadeBonus * (bonusPercentual / 100));

    // Obtém o total de milhas anual atualizado, chamando a função se necessário
    let milhasAnuais = document.getElementById("totalAnual").innerText;
    let milhasAcumuladas = (parseFloat(milhasAnuais) || calcularMilheiro()) + totalMilhasGanhas;

    let custoFinal = (quantidadeBonus * 0.02).toFixed(2);
    let custoTotalClube = (milhasAcumuladas * 0.015).toFixed(2);
    let custoAnual = (custoTotalClube * 12).toFixed(2);
    let custoMensal = custoTotalClube;

    document.getElementById("totalMilhas").innerText = totalMilhasGanhas;
    document.getElementById("custoFinal").innerText = `R$ ${custoFinal}`;
    document.getElementById("milhasAcumuladas").innerText = milhasAcumuladas;
    document.getElementById("custoTotalClube").innerText = `R$ ${custoTotalClube}`;
    document.getElementById("custoAnual").innerText = `R$ ${custoAnual}`;
    document.getElementById("custoMensalClube").innerText = `R$ ${custoMensal}`;
}
