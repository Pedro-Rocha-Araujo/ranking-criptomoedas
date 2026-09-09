import "./listagem.css"
import { Cripto } from "@/interfaces"

interface ListagemProps {
  lista?: Cripto[]
}

export default function Listagem({ lista }: ListagemProps) {
  return (
    <table>

      <thead>
        <tr>
          <th>Moeda</th>
          <th>Valor de Mercado</th>
          <th>Preço</th>
          <th>Volume</th>
          <th>24h</th>
        </tr>
      </thead>

      <tbody>

        { lista?.map((item)=> {
          return (
            <tr key={item.id}>
              <td data-label="Moeda">{item.name}</td>
              <td data-label="Valor de Mercado">Valor no Mercado</td>
              <td data-label="Preço">U$ {Number(item.priceUsd).toFixed(2)}</td>
              <td data-label="Volume">300</td>
              <td data-label="24h" className={Number(item.changePercent24Hr) > 0 ? "positivo" : "negativo" }>
                {Number(item.changePercent24Hr).toFixed(2)}
              </td>
            </tr>
          )
        }) }

      </tbody>

    </table>
  )
}