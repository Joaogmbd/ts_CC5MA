//Função Simples + com parâmetros e retorno String + Switch
function diaSemana(dia: number) : String {
	switch (dia){
		case 1:
			return "domingo";
		case 2:
			return "segunda";
		case 3:
			return "terca";
		case 4:
			return "quarta";
		case 5:
			return "quinta";
		case 6:
			return "sexta";
		case 7:
			return "sabado";
        default:
		return "isso nao eh um dia da semana";
	}
} 
console.log("Dia da semana (Arrow + Switch): "+diaSemana(1));

//Função Arrow + com parâmetros e retorno String + Switch
let funcao = (dia: number) : String => {
	switch (dia){
		case 1:
			return "domingo";
		case 2:
			return "segunda";
		case 3:
			return "terca";
		case 4:
			return "quarta";
		case 5:
			return "quinta";
		case 6:
			return "sexta";
		case 7:
			return "sabado";
        default:
		return "isso nao eh um dia da semana";
	}
}
console.log("Dia da semana (Arrow + Switch): "+funcao(7));

//Função Arrow + com parâmetros e retorno String + Enum
enum Dias {"Domingo", "Segunda", "Terca", "Quarta", "Quinta", "Sexta", "Sabado"};

let DiaSemana = (dia: number) => { 
    return Dias[dia];
};
//Domingo = 0, Segunda = 1,...,Sabado = 6
console.log("Dia da semana (Arrow + enum): "+ DiaSemana(1));



//Contexto “Criptografia”:
//◦ Dado a sequencia abaixo, diga quantos números são pares e quantos são ímpares.

//Dado a sequencia abaixo, diga quantos números são pares e quantos são ímpares
let sequenciaNumeros: number[] = [12, 45, 8, 6, 987, 29, 32];

//Numeros pares
let qdtPar = (pares:number[]) : number[] => {
    let newPares: number[] = [];
    for (let v of pares){
        if (v % 2 == 0){
           newPares.push(v);
        }
    }
    return newPares;
} 
console.log("Pares for..of: " + qdtPar(sequenciaNumeros));

//Numeros ímpares

let qtdImpar = (impares:number[]) : number[] => {
    let newImpares: number[] = [];
    for (let v of impares){
        if (v % 2 != 0){
           newImpares.push(v);
        }
    }
    return newImpares;
} 
console.log("Impares for..of:  "+ qtdImpar(sequenciaNumeros));


//Uma função Arrow qtdPar + com parâmetros e retorno number + forEach
let qdtPar2 = (pares:number[]) : number[] => {
    let newPares: number[] = [];
    sequenciaNumeros.forEach((element) => {
        if (element % 2 == 0){
            newPares.push(element);
        };
    });
    return newPares;
}
console.log("Pares forEach: " + qdtPar2(sequenciaNumeros));

//Uma função Arrow qtdImpar + com parâmetros e retorno number + forEach
let qdtImpar2 = (impares:number[]) : number[] => {
    let newImpares: number[] = [];
    sequenciaNumeros.forEach((element) => {
        if (element % 2 != 0){
            newImpares.push(element);
        };
    });
    return newImpares;
}
console.log("Impares ForEach: " + qdtImpar2(sequenciaNumeros));
