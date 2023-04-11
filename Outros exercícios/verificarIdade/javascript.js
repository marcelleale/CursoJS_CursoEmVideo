function verificar() {

    var data = new Date()
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');

        if (fano.value.length == 0 || Number(fano.value) > Number(ano)) {
            window.alert('[ERRO] Verifique os dados e tente novamente');
        } else {
            
            var fsex = document.getElementsByName('radsex');
            var idade = ano - Number(fano.value)
            // res.innerHTML = `Idade calculada: ${idade}`

            var genero = '';
            if (fsex[0].checked){

                genero = 'Homem';

                if (idade == 0 || idade < 10){
                    console.log("Criança")
                } else if (idade >= 10 && idade < 21) {
                    console.log("Jovem");
                } else if (idade < 50) {
                    console.log("Adulto");
                } else {
                    console.log("Idoso");
                }
               
                
            } else if (fsex[1].checked){
                genero = 'Mulher'

                if (idade == 0 || idade < 10){
                    console.log("Criança")
                } else if (idade >= 10 && idade < 21) {
                    console.log("Jovem");
                } else if (idade < 50) {
                    console.log("Adulta");
                } else {
                    console.log("Idosa");
                }
            }

            res.style.textAlign = 'center'

            if (idade == 1){
                res.innerHTML = `Detectamos ${genero} com ${idade} ano.`
            } else {
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            }
        }
}