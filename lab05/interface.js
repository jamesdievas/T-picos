
function registraEntrada(){
    if(document.dados.vei.value === "Carro"){ // usa o html
        controle.estacionar(new Carro(globalID,document.dados.placa.value,document.dados.marca.value,document.dados.cor.value,document.dados.nome.value),document.dados.Horadeentrada.value);
        
    }else{

        controle.estacionar(new Moto(globalID,document.dados.placa.value,document.dados.marca.value,document.dados.cor.value,document.dados.nome.value),document.dados.Horadeentrada.value);
    }
    globalID++;
}
function listar(){
    document.centro.bloco.value = controle.gerarRelatorio();
}

function lucro(){
    document.centro.bloco.value = "O lucro do estacionamento: R$" + controle.getLucro() + ",00";
}

function registraSaida(){
    controle.liberar(document.dados.ID.value, document.dados.HoradeSaida.value);
}
