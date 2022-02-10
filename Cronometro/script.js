var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000; // Quantos milésimos valem um segundo
var cron;

//inica o temporizador
function start(){
    cron = setInterval(() => { timer(); }, tempo);
}

//pausa o temporizador sem limpar as variáveis
function pause(){
    clearInterval(cron);
}

//Para o temporizador e limpa as variáveis
function stop(){
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerHTML = '00:00:00';
}

//Contagem do tempo de exibição
function timer(){
    ss++; //incrementa +1 na variável ss

    if (ss == 59){
        ss = 0;
        mm++;

        if (mm == 59){
            mm = 0;
            hh++;
        }
    }

    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);

    document.getElementById('counter').innerHTML = format;

    return format;
}



