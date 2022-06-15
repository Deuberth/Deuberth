let somarmussarela=0;
let vendamussarela=0.00;
let somarmista=0;
let vendamista=0.00;
let somarcalabresa=0;
let vendacalabresa=0.00;

function venda(){
    if(document.getElementById('mussarela').checked)
    {
    somarmussarela = somarmussarela + 1;
    vendamussarela = vendamussarela + 25;    
    document.getElementById("resultadomussarela").innerHTML = somarmussarela;
    document.getElementById("vendamussarela").innerHTML = vendamussarela;
    }
    else if(document.getElementById('mista').checked)
    {
    somarmista = somarmista + 1;
    vendamista = vendamista + 25;    
    document.getElementById("resultadomista").innerHTML = somarmista;
    document.getElementById("vendamista").innerHTML = vendamista;
    } else if(document.getElementById('calabresa').checked)
    {
    somarcalabresa = somarcalabresa + 1;
    vendacalabresa = vendacalabresa + 25;    
    document.getElementById("resultadocalabresa").innerHTML = somarcalabresa;
    document.getElementById("vendacalabresa").innerHTML = vendacalabresa;
    }

}

function estorno(){
    if(document.getElementById('mussarela').checked)
    {
    somarmussarela = somarmussarela - 1;
    vendamussarela = vendamussarela - 25; 
    if(somarmussarela<0){
        somarmussarela=0;
        vendamussarela=0;
    }
    document.getElementById("resultadomussarela").innerHTML = somarmussarela;
    document.getElementById("vendamussarela").innerHTML = vendamussarela;
    }
    else if(document.getElementById('mista').checked)
    {
    somarmista = somarmista - 1;
    vendamista = vendamista - 25; 
    if(somarmista<0){
        somarmista=0;
        vendamista=0;
    }   
    document.getElementById("resultadomista").innerHTML = somarmista;
    document.getElementById("vendamista").innerHTML = vendamista;
    } else if(document.getElementById('calabresa').checked)
    {
    somarcalabresa = somarcalabresa - 1;
    vendacalabresa = vendacalabresa - 25; 
    if(somarcalabresa<0){
        somarcalabresa=0;
        vendacalabresa=0;
    }   
    document.getElementById("resultadocalabresa").innerHTML = somarcalabresa;
    document.getElementById("vendacalabresa").innerHTML = vendacalabresa;
    }

}

  
	
	