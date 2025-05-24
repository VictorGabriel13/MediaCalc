function MediaPonderada() {
    let PrimeiroBimestre = document.getElementById("PrimeiroBi").value.trim();
    let SegundoBimestre = document.getElementById("SegundoBi").value.trim();
    let TerceiroBimestre = document.getElementById("TerceiroBi").value.trim();
    let QuartoBimestre = document.getElementById("QuartoBi").value.trim();
    let MessageTeste = document.getElementById("resultado");
    let msgAlert = document.getElementById("Aprovado")

    // Converter valores para número corretamente
    let num1 = parseFloat(PrimeiroBimestre) || 0;
    let num2 = parseFloat(SegundoBimestre) || 0;
    let num3 = parseFloat(TerceiroBimestre) || 0;
    let num4 = parseFloat(QuartoBimestre) || 0;

    // Calcular média ponderada dos alunos
    let media = (num1 * 2 + num2 * 2 + num3 * 3 + num4 * 3) / 10;

    const verificacao = [num1, num2, num3, num4]

    // Se a media calculada for menor que 6, Você foi Reprovado.
    if(verificacao.some(num => num <0 || num > 10)) { // Verifica se os Números Digitados Está entre 0 a 10;
        alert('<span>"Coloque Números de 0 a 10."</span>')
    }else{
    if(media >0 && media <6) {
        msgAlert.innerHTML ='Reprovado'
        MessageTeste.style.color = ' #dc143c'
        msgAlert.style.color = ' #dc143c'
    }
    else if (media > 6) {
        msgAlert.innerHTML = 'Aprovado'
        MessageTeste.style.color = ' #0CC77D'
        msgAlert.style.color = " #0CC77D"
    }
    else {
        msgAlert.innerHTML = 'Resultado: '
        msgAlert.style.color = ' #686A6B'
        MessageTeste.style.color = ' #686A6B'
    }
}

    // Exibir a média formatada
    MessageTeste.innerHTML = `Nota Final: <strong>${media.toFixed(1)}</strong>`;
}

function MediaAritmetica() {
    let PrimeiroBimestre = document.getElementById("PrimeiroBi").value.trim();
    let SegundoBimestre = document.getElementById("SegundoBi").value.trim();
    let TerceiroBimestre = document.getElementById("TerceiroBi").value.trim();
    let QuartoBimestre = document.getElementById("QuartoBi").value.trim();
    let MessageTeste = document.getElementById("resultado");
    let msgAlert = document.getElementById("Aprovado")

    // Converter valores para número corretamente
    let num1 = parseFloat(PrimeiroBimestre) || 0;
    let num2 = parseFloat(SegundoBimestre) || 0;
    let num3 = parseFloat(TerceiroBimestre) || 0;
    let num4 = parseFloat(QuartoBimestre) || 0;

    // Calcular média ponderada dos alunos
    let media = (num1 + num2 + num3 + num4) / 4;

    // Se a media calculada for menor que 6, Você foi Reprovado.
    if(media <6) {
        msgAlert.innerHTML ='Reprovado'
    }
    else {
        msgAlert.innerHTML = 'Aprovado'
    }

    // Exibir a média formatada
    MessageTeste.innerHTML = `Nota Final: <strong>${media.toFixed(1)}</strong>`;
}

function toggleOptions() {
    const customSelect = document.querySelector('.custom-select');
    customSelect.classList.toggle('open');
}

function MudarThema(theme) {
    const body = document.querySelector('body');
    const selectedOption = document.querySelector('.selected-option');
    const calcBox = document.querySelector('.calc-box');
    const header = document.querySelector('header');
    const inputs = document.querySelectorAll('input');
    const section = document.querySelector('section');
    const suapLogin = document.querySelector('#Suap-login');
    const customSelect = document.querySelector('.custom-select');

    // Troca a classe do tema
    if (theme === 'dark') {
        body.classList.add('theme-dark');
        body.classList.remove('theme-light');
        
        // Troca as classes de cada elemento específico
        calcBox.classList.add('theme-dark');
        calcBox.classList.remove('theme-light');
        header.classList.add('theme-dark');
        header.classList.remove('theme-light');
        inputs.forEach(input => {
            input.classList.add('theme-dark');
            input.classList.remove('theme-light');
        });
        section.classList.add('theme-dark');
        section.classList.remove('theme-light');
        suapLogin.classList.add('theme-dark');
        suapLogin.classList.remove('theme-light');
        customSelect.classList.add('theme-dark');
        customSelect.classList.remove('theme-light');
    } else if (theme === 'light') {
        body.classList.add('theme-light');
        body.classList.remove('theme-dark');
        
        // Troca as classes de cada elemento específico
        calcBox.classList.add('theme-light');
        calcBox.classList.remove('theme-dark');
        header.classList.add('theme-light');
        header.classList.remove('theme-dark');
        inputs.forEach(input => {
            input.classList.add('theme-light');
            input.classList.remove('theme-dark');
        });
        section.classList.add('theme-light');
        section.classList.remove('theme-dark');
        suapLogin.classList.add('theme-light');
        suapLogin.classList.remove('theme-dark');
        customSelect.classList.add('theme-light');
        customSelect.classList.remove('theme-dark');
    } else if (theme === 'mediaAritmetrica') {
        selectedOption.textContent = "Média Aritmética";
        MediaAritmetica()
         // Chama a função corretamente
    }
    else if (theme === 'mediaPonderada') {
        selectedOption.textContent = "Média Ponderada";
        MediaPonderada()
         // Chama a função corretamente
    }   
    
    // Fechar o dropdown após selecionar o tema
    customSelect.classList.remove('open');
}

function initCustomSelect() {
    const customSelect = document.querySelector('.custom-select');
    const selectedOption = customSelect.querySelector('.selected-option');
    const optionsList = customSelect.querySelector('.options-list');
    const options = customSelect.querySelectorAll('.option');

    // Adiciona o evento de clique para abrir e fechar o dropdown
    selectedOption.addEventListener('click', function () {
        toggleOptions();
    });

    // Adiciona o evento de clique para cada opção
    options.forEach(option => {
        option.addEventListener('click', function () {
            MudarThema(option.getAttribute('data-value'));
        });
    });

    // Fecha o dropdown se o usuário clicar fora
    document.addEventListener('click', function (e) {
        if (!customSelect.contains(e.target)) {
            customSelect.classList.remove('open');
        }
    });
}

// Inicializar o seletor customizado
initCustomSelect();
