import "./card.css"
import { Cripto } from "@/interfaces"

interface cardProps {
  cripto: Cripto,
  fecharCard: () => void
}

export default function Card( { cripto, fecharCard }: cardProps ) {
  return (
    <div className="background">
      <div className="card">
        <div className="header">
          <img 
            alt={`Ícone da criptomoeda ${cripto.name}`}
            src={`https://assets.coincap.io/assets/icons/${cripto.symbol.toLowerCase()}@2x.png`} 
          />
          <h1>{cripto.name}</h1>
        </div>
        <div className="infos">
          <span><strong>Preço em Dólar: </strong>U$ {Number(cripto.priceUsd).toFixed(2)}</span>
          <span><strong>Valor de Mercado: </strong>U$ {Number(cripto.marketCapUsd).toFixed(2)}</span>
        </div>
        <button onClick={fecharCard}>Fechar</button>
      </div>
    </div>
  )
}