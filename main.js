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
}
function aumentaTamanho(){
    if (tamanhoSenha < 20)
    tamanhoSenha++;
    numeroSenha.textContent = tamanhoSenha;
}