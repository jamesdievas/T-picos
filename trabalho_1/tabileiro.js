



function Tabuleiro(){
    // constroe o tabuleiro vazio
    var tabuleiro = new Array(8);
	for(var i = 0; i < 8; i++) {
		tabuleiro[i] = new Array(8);
		for(j = 0; j < 8; j++)
			tabuleiro[i][j] = 0; //
	}

    this.addPeca= function(peca){
        // coloca a peca no tabuleiro na posicao i, j
        tabuleiro[peca.getPosI()][peca.getPosJ()] = peca;
    }
    this.rmPeca = function(i,j){
        //remove a peca do tabuleiro
        tabuleiro[i][j] = null;
    }
    this.getPeca = function(i,j){
        //retona a peca que esta na posicao i,j
        return tabuleiro[i][j];
    }
    this.getRepresentacao = function(i,j){
        //retornar uma matriz 8x8 e As posicoes vazias do tabuleiro devem ter 0, e as demasis devem conter o Id de cada peça
        var tabuleiro_aux = new Array(8);
        for(var i = 0; i < 8; i++) {
            tabuleiro_aux[i] = new Array(8);
            for(j = 0; j < 8; j++){
                if(tabuleiro[i][j]!= 0){
                    tabuleiro_aux[i][j] = tabuleiro[i][j].getId();
                }else{
                    tabuleiro_aux[i][j] = 0;
                }
            }      
        }
        return tabuleiro_aux;
    }
}    