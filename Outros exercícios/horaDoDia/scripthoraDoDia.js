
function carregar(){
    console.log('oi');

var msg = window.document.getElementById('hora');
var img = window.document.getElementById('imagem');

var data = new Date()
var horario = data.getHours();
// var horario = 6;
console.log(horario)

msg.innerHTML = `Agora são ${horario} horas.`;

if (horario >= 0 && horario < 12) {
    console.log("Bom dia");
    img.src = 'manha.png'
    document.body.style.background = '#C2C09B'

} else if (horario >= 12 && horario < 18) {
    console.log("Boa tarde");
    img.src = 'tarde.png'
    document.body.style.background = '#AF7B67'

} else {
    console.log("Boa noite")
    img.src = 'noite.png'
    document.body.style.background = '#0F263B'
}

}