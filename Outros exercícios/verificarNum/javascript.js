
let array = [];

let num = document.getElementById('num');
let numeros = document.getElementById('numAdicionado');
let res = document.getElementById('resultado');


//VERIFICAR SE O NÚMERO ESTÁ DENTRO DO INTERVALO EXIGIDO

function isNumber(num){ 

    if(Number(num) >= 1 && Number(num) <= 100){
        return true;
    } else {
        return false;
    }

}

//VERIFICAR SE O NÚMERO JÁ ESTÁ NA LISTA

function inLista(num, lista){

    if (lista.indexOf(Number(num)) != -1){
        return true;
    } else {
        return false;
    }

}


function adicionar(){


    if(isNumber(num.value) && !inLista(num.value, array)) {

        array.push(Number(num.value)) 

        let item = document.createElement('option');
        item.text = `Número ${num.value} adicionado.`;
        numeros.appendChild(item);
        res.innerHTML = ' ';

    } else {

        window.alert('[ERROR]');
    }
    
    num.value = ' ';
    num.focus();
 
    console.log(array);

}


function finalizar(){
  
    if(array.length == 0){
        alert("Adicione valores antes de finalizar");
    } else{

        let total = array.length;

        res.innerHTML = ' ';
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.`
        
        let maior = array[0]
        let menor = array[0]

        soma = 0;
        media = 0;
        

            for(let pos in array){
                soma += array[pos];

                if(array[pos] > maior){
                    maior = array[pos]
                }
                if(array[pos] < menor){
                    menor = array[pos]
                }
            }

        media = soma/total

        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        res.innerHTML += `<p>A soma total é de ${soma}.</p>`
        res.innerHTML += `<p>A média dos valore é de ${media}.</p>`
   
    }

}