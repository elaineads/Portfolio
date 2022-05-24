function calcularMedia() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var nota4 = parseFloat(document.getElementById("nota4").value);

    var media = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(1);

    var resultado = document.getElementById("resultado");

    if (media >= 6) {
        resultado.innerHTML = "Sua nota final é " + media + "! Aprovado(a)!";
    } else {
        resultado.innerHTML = "Sua nota final é " + media + "! Reprovado(a)!";
    }
}