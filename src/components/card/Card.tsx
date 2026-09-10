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
        <div className="infos">
          <img src={`https://assets.coincap.io/assets/icons/${cripto.symbol.toLowerCase()}@2x.png`} />
          <h1>{cripto.name}</h1>
        </div>
        <span></span>
        <button onClick={fecharCard}>Fechar</button>
      </div>
    </div>
  )
}