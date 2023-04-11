// console.log('oi');

function contar(){

    var inicio = Number(document.querySelector('#inicio').value);
    var fim = Number(document.getElementById('fim').value);
    var passo = Number(document.getElementById('passo').value);
    var res = document.getElementById('res');

    console.log(inicio, fim, passo);

    // Validações

    if (passo <= 0){
        passo = 1
        alert("O Passo não pode ter valor 0. Será utilizado valor 1.")
        
    } else {
        res.innerHTML = "Contando..."
    }


    if (inicio == 0 || fim == 0){

       
        alert("Preencha todos os campos.");
        res.innerHTML = "Impossível Contar";
        exit();

    } else {
        res.innerHTML = "Contando..."
    }

   

    //LOOPING

    let cont = 0;

    //contagem progressiva

    if (inicio < fim) {

        for (cont = inicio; cont <= fim; cont += passo) {
        res.innerHTML += ` ${cont} \u{1F920}`;  
        }
    }
    
    //contagem regressiva

    if (inicio > fim) {

        for (cont = inicio; cont >= fim; cont -= passo) {
            res.innerHTML += `${cont} \u{1F920}`
        }
    }

    res.innerHTML += ` \u{1F404}`
}