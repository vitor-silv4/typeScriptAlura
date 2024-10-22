import { Necociacoes } from "../models/negociacoes";
import { MensagemView } from "./mensagemView";
import { View } from "./view.js";

export class NegociacaoView extends View<Necociacoes>{
    protected template(model: Necociacoes): string{
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>

                </tr>
            </thead>
            <tbody>
                ${model.lista().map(negociacao => {
                    return `
                    <tr>
                        <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.quantidade}</td>
                    </tr>`
                }).join('')}
            </tbody>
        </table>
        `;
    }

    public update(model: Necociacoes): void{
        const template = this.template(model);
        console.log(template);
        this.element.innerHTML = template;
    }
}