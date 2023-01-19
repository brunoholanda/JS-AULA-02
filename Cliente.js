export class Cliente {
    nome;
    _cpf;

    get cpf() {
        return this._cpf;
    }

    constructor (nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }
}

//o codigo acima protege o cpf para que ele nao possa ser alterado, pois uma pessoa/cliente so possui um cpf durante sua existencia