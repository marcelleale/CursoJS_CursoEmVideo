// console.log('oi');

document.getElementById('teste').style.display = "none";


function calc() {
let num = document.getElementById('num');
console.log(num);
document.getElementById('teste').style.display = "block";
let res = document.getElementById('resultado');

// console.log(res);

if (num.value.length == 0){
    window.alert('Por favor, digite um número')
} else {
    let n = Number(num.value);

    console.log(n);
    let cont = 1;
    
    for (cont = 1; cont <= 10; cont++){

        let item = document.createElement('option');
        item.text = n + ' x ' + cont + ' = ' + n*cont;
        res.appendChild(item);
    }
    
}

}