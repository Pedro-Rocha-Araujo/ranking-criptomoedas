import "./listagem.css"
import { Cripto } from "@/interfaces"

interface ListagemProps {
  lista?: Cripto[]
}

export default function Listagem({ lista }: ListagemProps) {
  const formatacao = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  })
  const formatacaoMenor = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact"
  })
  return (
    <table>

      <thead>
        <tr>
          <th>Moeda</th>
          <th>Valor de Mercado</th>
          <th>Preço</th>
          <th>Últimas 24h</th>
        </tr>
      </thead>

      <tbody>

        { lista?.map((item)=> {
          return (
            <tr key={item.id}>
              <td data-label="Moeda">{item.name}</td>
              <td data-label="Valor de Mercado">{formatacaoMenor.format(Number(item.marketCapUsd))}</td>
              <td data-label="Preço">{formatacao.format(Number(item.priceUsd))}</td>
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