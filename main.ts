//Função Simples + com parâmetros e retorno String + Switch
let dia: number = 2;
switch (dia){
	case 1:
		console.log("domingo");
	break;
	case 2:
		console.log("segunda");
	break;
	case 3:
		console.log("terca");
	break;
	case 4:
		console.log("quarta");
	break;
	case 5:
		console.log("quinta");
	break;
	case 6:
		console.log("sexta");
	break;
	case 7:
		console.log("sabado");
	break;
	default:
		console.log("isso nao eh um dia da semana");
} 

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

console.log(funcao(7))

//Função Arrow + com parâmetros e retorno String + Enum
enum Dias {"Domingo", "Segunda", "Terca", "Quarta", "Quinta", "Sexta", "Sabado"};

let DiaSemana = (dia: number) => { 
    return Dias[dia];
};

//Domingo = 0, Segunda = 1,...,Sabado = 6
console.log(DiaSemana(1));
