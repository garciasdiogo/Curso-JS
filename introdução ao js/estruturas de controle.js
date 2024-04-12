/* As estruturas de controle permitem controlar o fluxo de execução do código. 
As principais são if, else, else if, switch, for, while, e do while.*/

var idade = 18;

if (ofade >=18) {
    console.log("Você é maior de idade.");

} else {
    console.log("Você é menor de idade.");

}

var dia = "quarta";

switch (dia) {
    case "segunda":
        console.log ("Hoje é segunda-feira.");
        break;
    case "quarta":
        console.log ("Hoje é quarta-feira.");
        break;
   default:
        console.log("Não é segunda nem quarta.");
}

for (var i = 0; i < 5; i++) {
    console.log(i);
}

var j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);