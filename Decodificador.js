function mostrarErro(mensagem) {
    alert(mensagem);
}

function validarTexto(texto) {
    if (/[a-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]/.test(texto)) {
        mostrarErro("Erro: O texto contém letras minúsculas ou acentos. Por favor, use apenas letras MAIÚSCULAS e SEM acentos.");
        return false;
    }
        return true;
}
  
function encriptar() {
    let texto = document.getElementById("TextArea_1").value;
    
    if (!validarTexto(texto)) {
        
        return; }
  
    texto = texto
        .replace(/a/gi, "ai")
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");


    texto = texto.toUpperCase();
    
    document.getElementById("TextArea_2").value = texto;
}

function desencriptar() {
    let texto = document.getElementById("TextArea_1").value;
    
    
    texto = texto
        .replace(/ufat/gi,"u")
        .replace(/ober/gi,"o")
        .replace(/imes/gi,"i")
        .replace(/enter/gi,"e")
        .replace(/ai/gi,"a");

    document.getElementById("TextArea_2").value = texto;
    
    texto = texto.toUpperCase();

    document.getElementById("TextArea_2").value = texto;
}


function copiar() {
  
    var textoArea2 = document.getElementById('TextArea_2');
    
  
    textoArea2.select();
}

