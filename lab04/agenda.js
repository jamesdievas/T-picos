//Rafael Silva Barbon
//RA: 19243633

function contato(id, nome, telefone){
    this.id = id;
    this.nome = nome;
    this.telefone = telefone;
} 

function agenda(){
    //let lista_cont = [];//Lista de contatos dentro da agenda
    var lista_cont = [];
    //console.log(lista_cont.length);
    this.inserir = function(contatop){
        lista_cont.push(contatop); //Vetor de contatos (lista)
    }
    
    this.remover = function(id){
        for(var i = 0; i < lista_cont.length; i++){
            if(lista_cont[i].id === id){
                delete lista_cont[i];
            }
        }
        //Remove os valores empty do array
        lista_cont = lista_cont.filter((a) => a);
    }

    this.buscar = function(id){
        for(var i = 0; i!= lista_cont.length; i++){
            if(lista_cont[i].id === id){
                alert(String(lista_cont[i].nome + " - "+lista_cont[i].telefone));
            }
        }
    }

    this.listar = function(){
        var nomes = [];//Recebe os nomes
        for(var i = 0; i< lista_cont.length; i++){
            nomes.push(lista_cont[i].nome + " ID:" +lista_cont[i].id + " Numero:" +lista_cont[i].telefone + '\n');
        }
        alert(nomes.sort());
    }
}

var contatoo, id, nome, sair = 1;
let agendaa = new agenda();

while(sair){
    var op = prompt("1 - Inserir Contato.\n2 - Remover Contatos.\n3 - Listar Contatos.\n4 - Buscar Contato.\nQualquer Tecla para sair.\nSelecione uma Opçao:");
    switch(op){
        case "1":
            id = prompt("ID:");    
            nome = prompt("Nome:");
            telefone = prompt("Telefone:");
            contatoo = new contato(id, nome, telefone);
            agendaa.inserir(contatoo);
            break;
        case "2":
            id = prompt("ID:");   
            agendaa.remover(id);
            break;
        case "3":
            agendaa.listar();
            break;
        case "4":
            id = prompt("ID:");   
            agendaa.buscar(id);
            break;
        default:
            sair = 0; 
    }
}


