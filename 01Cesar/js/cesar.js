const desplazamiento = document.getElementById("desplazamiento");
const texto = document.getElementById("texto");
const textoCifrado = document.getElementById("cifrado");

function cifrado(){
    const textoIngresado = texto.value;
    const valorDesplazamiento = parseInt(desplazamiento.value);
    //obtener caracter por caracter y validar la entrada del texto
    textoCifrado.value = textoIngresado.split('').map(c => {
        let mayus = (c === c.toUpperCase()) ? true : false;
        let valorEntero = c.toLowerCase().charCodeAt(0);
        if(valorEntero >= 97 && valorEntero <= 122){
            
            valorEntero = (valorEntero - 97 + valorDesplazamiento)%26;

            if(valorEntero < 0){
                valorEntero+=26;
            }else{
                valorEntero += 97;
            }
            
        } else if(valorEntero >=48 && valorEntero <=57){

            valorEntero = (valorEntero - 48 + valorDesplazamiento)%10;

            if(valorEntero < 0){
                valorEntero+=10;
            }else{
                valorEntero+=48;
            }

        }
        let cifrado = String.fromCharCode(valorEntero);
        return mayus ? cifrado.toUpperCase() : cifrado;
    }).join('');
}


texto.addEventListener("keyup" , cifrado);
desplazamiento.addEventListener("change" , cifrado);

const desplazamientoDes = document.getElementById("desplazamientodes");
const textoDes = document.getElementById("textodes");
const textoDescifrado = document.getElementById("descifrado");

function descifrado() {
    const textoIngresado = textoDes.value;
    const valorDesplazamiento = parseInt(desplazamientoDes.value);

    textoDescifrado.value = textoIngresado.split('').map(c => {
        let mayus = (c === c.toUpperCase()) ? true : false;
        let valorEntero = c.toLowerCase().charCodeAt(0);
        if (valorEntero >= 97 && valorEntero <= 122) {
            
            valorEntero = (valorEntero - 97 - valorDesplazamiento) % 26;

            
            if (valorEntero < 0) {
                valorEntero += 26;
            }

            valorEntero += 97; 
        } else if (valorEntero >= 48 && valorEntero <= 57) {
            
            valorEntero = (valorEntero - 48 - valorDesplazamiento) % 10;

            
            if (valorEntero < 0) {
                valorEntero += 10;
            }

            valorEntero += 48;
        }
        let descifrado = String.fromCharCode(valorEntero);
        return mayus ? descifrado.toUpperCase() : descifrado;
    }).join('');
}


textoDes.addEventListener("keyup",descifrado);
desplazamientoDes.addEventListener("change", descifrado);