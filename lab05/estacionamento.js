function Estacionamento(_numeroDeVagas=20){
    //inicializa o vetor de vagas e preenche com undefined recebe o (veiculo, hora de entrada)
    let _nvagas = new Array(_numeroDeVagas).fill(undefined);
    //inicializa a variavel que guardará o lucro do estacionamento
    let _lucro = 0;
    //guardarah o historico de carros (veiculo, hora de entrada, hora de saida)
    let _vagasHistory = [];
    //funcoes do estacionamento
    //registra a entrada de veículo
    this.estacionar = function(veiculo, horaEntrada){
        let i;
        for(i=0; i< _numeroDeVagas; i++){
            if(_nvagas[i] == undefined){
                _nvagas[i] = [veiculo,horaEntrada]
                // se a adicao de um novo veiculo no estacionamento tiver sidp bem sucedida
                return true;
            }
        }
        // se o estacionamento já estiver cheio retorna false
        return false;
    }
    //registra a saida de veículo
    this.liberar = function(idVeiculo, horaSaida){
        let i;
        for(i=0; i< _numeroDeVagas;i++){
            if(_nvagas[i] !==undefined && _nvagas[i][0].getId() == idVeiculo){ // o getId eh do veiculo ( veicuo tem o metodo getID)
                _lucro += _nvagas[i][0].calcularValorPago(_nvagas[i][1],horaSaida);
                _vagasHistory.push([_nvagas[i][0],_nvagas[i][1],horaSaida]);
                _nvagas[i] = undefined;
                //liberar veiculo caso ele exita na lista para ser liberado
                return true;
            }

        }
        // caso o veiculo não testeja no estacionamento fretorna false
        return false;
    }
    this.gerarRelatorio = function(){
        let i;
        var relatorio = "ID\tHoraEntrada\n\tHorsaSaida\n";
        for(i = 0; i < _numeroDeVagas; i++){
            if(_nvagas[i] !== undefined)
                relatorio += _nvagas[i][0].getId() + "\t" + _nvagas[i][1] + "\n";
        }
        for(i = 0; i < _vagasHistory.length; i++){
            relatorio += _vagasHistory[i][0].getId() + "\t" + _vagasHistory[i][1] + "\t\t" + _vagasHistory[i][2] + "\n";
        }
        return relatorio;
    }
    //lucro do estacionamento
    this.getLucro = function(){ 
        return _lucro;
    }
    let controle = new Estacionamento();
    let globalID = 1;
}