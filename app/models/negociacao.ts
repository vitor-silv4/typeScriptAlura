export class Negociacao{

    constructor(
        private _data: Date,
        private readonly _quantidade: number,
        private readonly _valor: number ){}

    
    public static criaDe(dataString:string, quantidadeString: string, valorString: string): Negociacao{
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }

    get volume(): number{
        return this._quantidade * this.valor;
    }

    get data(): Date{
        const data = new Date(this._data.getTime())
        return data;
    }

    get quantidade(): number{
        return this._quantidade;
    }

    get valor(): number{
        return this._valor;
    }


}