function Veiculo(_id,_placa,_marca,_cor,_nomeDoProprietário){
    //metodos sets
    this.setId = function(id){
        _id=id;
    }
    this.setPlaca = function(placa){
        _placa = placa;
    }
    this.setMarca = function(marca){
        _marca = marca;
    }
    this.setCor = function(cor){
        _cor = cor;
    }
    this.setNomeDoProprietario = function(nomeProprietario){
        _nomedoProprietario = nomeProprietario;
    }
    //metodos gets
    this.getId = function(){
        return _id;
    }
    this.getPlaca = function(){
        return _placa;
    }
    this.getMarca = function(){
        return _marca;
    }
    this.getCor = function(){
        return _cor;
    }
    this.getNomeDoProprietario = function(){
        return _nomedoProprietario;
    }
    //quem eh a funcao calculaMinutos ( onde está)
    this.calcularValorPago = function(horaEntrada,horaSaida){
        var duracao = calculaMinutos(horaEntrada,horaSaida);
        if(duracao > 10)
            return 50;
        return 0;
    }




}