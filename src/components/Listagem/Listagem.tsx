import "./listagem.css"

export default function Listagem() {
  return (
    <table>

      <thead>
        <tr>
          <th>Moeda</th>
          <th>Valor no Mercado</th>
          <th>Preço</th>
          <th>Volume</th>
          <th>24h</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th>Bitcoin</th>
          <th>Valor no Mercado</th>
          <th>R$ 50,00</th>
          <th>300</th>
          <th>-200</th>
        </tr>
      </tbody>

    </table>
  )
}