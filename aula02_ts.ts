//Cria interface pessoa
interface IPessoaEx {
	nome: string;
	sobrenome: string;
	validarDados: (x: string) => boolean;
}
//Classe Contacorrente
class ContaCorrenteEx {
	correntista: IPessoaEx;
	saldo: number;

	constructor(correntista: IPessoaEx, saldo: number){
		this.correntista = correntista;
		this.saldo = saldo;
	}
	adicionarCorrentistaPF(correntista: IPessoaEx): void {
		this.correntista = correntista;
	}
	imprimirDadosPf(): string{
		return "Nome completo: " + this.correntista.nome + " " + this.correntista.sobrenome; 
	}
}
//Classe InterfacePessoaFisica , sobrescrevendo atributos da interface IpessoaEx
class IPessoaFisicaEx implements IPessoaEx {
	nome: string;
	sobrenome: string;
	cpf: string;

	constructor (nome: string, sobrenome: string, cpf: string){
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.cpf = cpf;
	}

	private validarCPF(x: string): boolean {
		return true;
	}

	validarDados(x: string) {
		this.validarCPF(this.cpf);
		return true;
	}

}

//definindo correntista1 do tipo pessoaFisica.
let correntista1 = new IPessoaFisicaEx("Carlos", "da Silva", "123.123-12")
//criando objeto do tipo contaCorrente, passando o correntista do tipo pessoa fisica e seu saldo
let obj1 = new ContaCorrenteEx(correntista1, 1000); 
console.log(obj1.imprimirDadosPf())
console.log(obj1.correntista.validarDados(correntista1.cpf));
