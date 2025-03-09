function Bimestres() {
    let PrimeiroBimestre = document.getElementById("PrimeiroBi").value.trim();
    let SegundoBimestre = document.getElementById("SegundoBi").value.trim();
    let TerceiroBimestre = document.getElementById("TerceiroBi").value.trim();
    let QuartoBimestre = document.getElementById("QuartoBi").value.trim();
    let MessageTeste = document.getElementById("resultado");
    let MessageReprovado = document.getElementById("Aprovado")

    // Converter valores para número corretamente
    let num1 = parseFloat(PrimeiroBimestre) || 0;
    let num2 = parseFloat(SegundoBimestre) || 0;
    let num3 = parseFloat(TerceiroBimestre) || 0;
    let num4 = parseFloat(QuartoBimestre) || 0;

    // Calcular média ponderada dos alunos
    let media = (num1 * 2 + num2 * 2 + num3 * 3 + num4 * 3) / 10;

    // Se a media calculada for menor que 6, Você foi Reprovado.
    if(media <6) {
        MessageReprovado.innerHTML ='Reprovado'
    }
    else {
        MessageReprovado.innerHTML = 'Aprovado'
    }

    // Exibir a média formatada
    MessageTeste.innerHTML = `Nota Final: <strong>${media.toFixed(1)}</strong>`;
}