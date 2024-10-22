import { Negociacao } from "./negociacao";

export class Necociacoes{
    private negociacoes: Array<Negociacao> = [];


    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao)
    }

    public lista(): ReadonlyArray<Negociacao>{
        return this.negociacoes;
    }
}

