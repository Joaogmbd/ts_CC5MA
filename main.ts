/* let dia: number = 1231231;
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
} */

/*
let funcao = (dia: number) : String => {
	switch (dia){
		case 1:
			return "domingo";
		break;
		case 2:
			return "segunda";
		break;
		case 3:
			return "terca";
		break;
		case 4:
			return "quarta";
		break;
		case 5:
			return "quinta";
		break;
		case 6:
			return "sexta";
		break;
		case 7:
			return "sabado";
		break;
        default:
		console.log("isso nao eh um dia da semana");
	}
}

console.log(funcao(7))
*/

enum Dias {"Domingo", "Segunda", "Terca", "Quarta", "Quinta", "Sexta", "Sabado"};

let DiaSemana = (dia: number) => { 
    return Dias[dia];
};

//Domingo = 0, Segunda = 1,...,Sabado = 6
console.log(DiaSemana(1));
