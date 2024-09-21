/*
Não eltere as configurações dete arquivo
*/
let chave = "cebcd482eda57fa9a6714c1c2ba91885"

function mostraDados(dados){
    console.log(dados)
    document.getElementById("cidade").innerHTML = "Tempo em " + dados.name
    document.getElementById("temp").innerHTML =  Math.floor(dados.main.temp) + "°C"
    document.getElementById("descricao").innerHTML = dados.weather[0].description
    document.getElementById("icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.getElementById("umidade").innerHTML = "Umidade: " +  dados.main.humidity + "%"

}

async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    chave + 
    "&lang=pt_br" +
    "&units=metric"
    )
    .then(resposta => resposta.json())

    mostraDados(dados)
}


function buscarTempo(){
   let cidade = document.getElementById("input-cidade").value

   buscarCidade(cidade)
}