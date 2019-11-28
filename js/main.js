document.getElementById('formulario').addEventListener('submit', cadastroAtleta);

function cadastroAtleta(e){
    var nome = document.getElementById('nome').value;
    var categoria = document.getElementById('categoria').value;
    var idade = document.getElementById('idade').value;
    var peso = document.getElementById('peso').value;

    if (!nome && !categoria && !peso && !idade) {
        alert("Por favor, preencha os campos em branco!");
        return false;
    }

    atleta = {
        nome : nome,
        categoria : categoria,
        idade: idade,
        peso: peso
    }

    if(localStorage.getItem('octogono') === null){
        var atletas = [];
        atletas.push(atleta);
        localStorage.setItem('octogono', JSON.stringify(atletas));
    } else {
        var atletas = JSON.parse(localStorage.getItem('octogono'));
        atletas.push(atleta);
        localStorage.setItem('octogono', JSON.stringify(atletas));
    }

    document.getElementById('formulario').reset();

    mostra();

    e.preventDefault();
}

function apagar(nome){
    var atletas = JSON.parse(localStorage.getItem('octogono'));

    for(var i = 0; i < atletas.length; i++){
        if (atletas[i].nome == nome){
            atletas.splice(i, 1);
        }

        localStorage.setItem('octogono', JSON.stringify(atletas));
    }

    mostra();
}

function mostra(){
    var atletas = JSON.parse(localStorage.getItem('octogono'));
    var atletasResultado = document.getElementById('resultados');

    atletasResultado.innerHTML = '';

    for (var i = 0; i < atletas.length; i++) {
        var nome = atletas[i].nome;
        var categoria = atletas[i].categoria;
        var idade = atletas[i].idade;
        var peso = atletas[i].peso;

        atletasResultado.innerHTML += '<tr><td>' + nome + 
                                    '</td><td>' + categoria + 
                                    '</td><td>' + idade + 
                                    '</td><td>' + peso + 
                                    '</td><td><button onclick="editar(\''+ nome +'\')">Editar</button>' + 
                                    '</td><td><button  onclick="apagar(\''+ nome +'\')">Excluir</button>' + 
                                    '</td></tr>';
        
    }
}

function editar(){
    
}