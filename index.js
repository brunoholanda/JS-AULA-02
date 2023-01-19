import {Cliente} from './Cliente.js';
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Bruno", 11122233309);
const cliente2 = new Cliente("Nayara", 88822233309);


const contaCorrenteBruno = new ContaCorrente(1001, cliente1);

contaCorrenteBruno.depositar(500);

const conta2 = new ContaCorrente(102, cliente2);
new ContaCorrente(102, cliente2);
new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteBruno.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);



