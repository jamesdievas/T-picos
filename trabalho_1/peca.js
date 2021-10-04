// Crie uma superclasse Peca, que deverá ser salva no arquivo peca.js.
// O construtor deve receber como parâmetros os atributos:
// tipo: determina se a peça é branca ou preta.
// posI: determina a posição i da peça no tabuleiro.
// posJ: determina a posição j da peça no tabuleiro.
// id: determina o identificador da peça.
function Peca(_tipo, _posI, _posJ,_id){


    this.getTipo = function(){
        return this._tipo;
    }
    this.getPosI = function(){
        return this._posI;
    }
    this.getPosJ = function(){
        return this._posJ
    }
    this.getId =  function(){
        return this.getId;
    }
    this.setTipo = function(tipo){
        _tipo = tipo;
    }
    this.setPosI = function (posI){
        _posI = posI;
    }
    this.setPosJ = function(posJ){
        _posJ = posJ;
    }
    this.setId = function(id){
        _id = id;
    }

    //funcao abstrata
    this.mover = function(tabuleiro,i, j){
    
       console.log("Pode começar");
    }
}