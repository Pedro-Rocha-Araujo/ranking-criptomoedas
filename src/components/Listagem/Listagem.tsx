import "./listagem.css"

export default function Listagem() {
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
        <tr>
          <td data-label="Moeda">Bitcoin</td>
          <td data-label="Valor de Mercado">Valor no Mercado</td>
          <td data-label="Preço">R$ 50,00</td>
          <td data-label="Volume">300</td>
          <td data-label="24h" className="positivo">+200</td>
        </tr>

        <tr>
          <td data-label="Moeda">Bitcoin</td>
          <td data-label="Valor de Mercado">Valor no Mercado</td>
          <td data-label="Preço">R$ 50,00</td>
          <td data-label="Volume">300</td>
          <td data-label="24h" className="negativo">-200</td>
        </tr>
      </tbody>

    </table>
  )
}