console.log("connected");



function seleccionarCartas(){
    const cartas = document.getElementsByClassName("cartas");
    return cartas;
}

function numeroAleatorio(){
   let numero = Math.floor(Math.random() * (28 - 1) + 1);
   return numero;
}

function numeroAleatoriaCasas(){
    let array = [28];
for (let numero =0; numero<=28; numero++){
    let j = parseInt(Math.floor(Math.random() * 28));
    console.log(j);
    array.push(j);


    const indice = array.indexOf(j);  
     array[indice] = numero; 
 
     console.log(array.values);
     if(numero == array[0]){
         continue;
     }
     else{
         array[0] = numero;
     }

        
        if(array[indice] != j && array.length == 28 ){
            
            console.log(array);
            return array;

        }
        else{
            continue;
        }

      
    }
}

/* function animacionesJavascript(carta1){
    const animacion = carta1.animate([
        {transform: "scale(0.2)"},
        {transform: "scale(1.3)"},
        {transform: "scale(1)"}
    ],{
        easing: "linear",
        iterations: 1,
        duration: 200
    });
    return animacion.finished;
    
} */

function recorrerAlumnos(alumnos, carta1){
    for(let i= 0; i<alumnos.length; i++){
        
        carta1[i].innerHTML = alumnos[i];
        carta1[i].classList.add('estilos-array-alumnos');
    }
}

function director(carta1, alumnos){
    for(let i= 0; i<=alumnos.length; i++){
        let numero = numeroAleatorio();
        let numeroint = parseInt(numero);
      if(carta1[i].innerHTML != "Gryffindor" && carta1[i].innerHTML != "Ravenclaw" && carta1[i].innerHTML != "Hufflepuff" && carta1[i].innerHTML != "Slytherin"){
        carta1[i].animate([
            {transform: "scale(0.2)"},
            {transform: "scale(1.6)"},
            {transform: "scale(1)"}
        ],{
            easing: "linear",
            iterations: 1,
            duration: 5000
        });
      
        carta1[i].innerHTML = "Director: " + alumnos[i];
        break;
        }
        else{
            continue;
        }
    }
}


function cartasGryffindor(carta1, alumnos, numero2){
    const texto = document.getElementsByClassName("alumnos-gryffindor");
    let numeros = numero2.slice(0, 7);
    console.log(numeros);
    for(let i= 0; i<= 6; i++){
        let j= numeros[i];
        carta1[j].innerHTML = "Gryffindor";
        carta1[j].classList.add('estilos-array-alumnos');
        texto[i].innerHTML = alumnos[j]; 
        }

}
    
function cartasRavenclaw(carta1, alumnos, numero2){
    const texto = document.getElementsByClassName("alumnos-Ravenclaw");
    let numeros2 = [];
    numeros2 = numero2.slice(7,14);
    console.log(numeros2);
    let y = 0;
    for(let i= 0; i<= 6; i++){
        let j= numeros2[i];
       
        carta1[j].innerHTML = "Ravenclaw";
        carta1[j].classList.add('estilos-array-alumnos');
        texto[y++].innerHTML = alumnos[j]; 
      
}}

function cartasHufflepuff(carta1, alumnos, numero2){
    let numeros3 = [];
    const texto = document.getElementsByClassName("alumnos-HUFFLEPUFF");
    numeros3 = numero2.slice(14,21);
    console.log(numeros3);
    let y = 0;
    for(let i= 0; i<= 6; i++){
        let j= numeros3[i];
       
        carta1[j].innerHTML = "Hufflepuff";
        carta1[j].classList.add('estilos-array-alumnos');
        texto[y++].innerHTML = alumnos[j]; 
      
}}

function cartasSlytherin(carta1, alumnos, numero2){
    let numeros4 = [];
    const texto = document.getElementsByClassName("alumnos-SLYTHERIN");
    numeros4 = numero2.slice(21,29);
    console.log(numeros4);
    let y = 0;
    for(let i= 0; i<= 6; i++){
        let j= numeros4[i];
       
        carta1[j].innerHTML = "Slytherin";
        carta1[j].classList.add('estilos-array-alumnos');
        texto[y++].innerHTML = alumnos[j]; 
      
}}

/*     carta1[i].animate([
        {transform: "scale(0.2)"},
        {transform: "scale(1.6)"},
        {transform: "scale(1)"}
    ],{
        easing: "linear",
        iterations: 1,
        duration: 5000
    });
}

/* carta1[i].animate([
    {transform: "scale(1)"}
],{
    easing: "linear",
    iterations: 1,
    duration: 1000
}); */
/*         if(i == 0){
            continue;
        }
        
        else{ 
            carta1[i - 1].classList.add('animacion-cartas2');
            } 
    }   
    }
 */ 
function ejecucion(){
    let alumnos = ["1", "2", "3", "4", "5", "6", "7", "8", "9", 
"10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
"21", "22", "23", "24", "25", "26", "27", "28"];
    
    
    
    const carta1 = seleccionarCartas();
    let numero = numeroAleatorio();
    let numero2 = numeroAleatoriaCasas();
    recorrerAlumnos(alumnos, carta1);
    cartasGryffindor(carta1, alumnos, numero2);
    cartasRavenclaw(carta1, alumnos, numero2);
    cartasHufflepuff(carta1, alumnos, numero2);
    cartasSlytherin(carta1, alumnos, numero2);
   director(carta1, alumnos);  
   
    


}


ejecucion();