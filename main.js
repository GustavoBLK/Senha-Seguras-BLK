const numeroSenha = document.querySelector(' .parametro-senha__texto'); 
let tamanhoSenha = 9999;
numeroSenha.textContent = tamanhoSenha;

const botes = document.querySelectorAll(' .parametro-senha__botao');

botoes[0].onclik =diminuiTamanho;
botoes[1].onclick = aumenTamanho;8

function diminuiTamanho(){
    if (tamanhoSenha > 1){
        tamanhoSenha--; 
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function aumentaTamanho(){
    if (tamanhoSenha < 20)
    tamanhoSenha++;
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}


const campoSenha = document.querySelector('#campoSenha');
const checkbox = document.querySelectorAll(' .checkbox');

for (i=0; i <checkbox.length;i++){
    checkbox[i].onclick = geraSenha
}

console.log(checkbox[1]. checkbox);

const letrasMaiuculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
const letrasMinuscula = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@%*?';

geraSenha();

function geraSenha(){
    let alfabeto ='';
    if (checkbox[1].checked){
        alfabeto = alfabeto + letrasMaiuculas;
    }
    if (checkbox[1],checkbox){
        alfabeto = alfabeto + letrasMaiuculas;
    }
    
    let senha = '';
    for (let i=0; i <tamanhoSenha;i++) {
    let numeroAleatorio = Math.random()*letrasMaiusculas.length
    numeroAleatorio = Math.floor(numeroAleatorio);
    senha = senha + letrasMaiuculas[numeroAleatorio];
    }
    campoSenha.value = senhas;
}
