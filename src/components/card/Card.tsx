interface cardProps {
  fecharCard: () => void
}

export default function Card( { fecharCard }: cardProps ) {
  return (
    <div className="background">
      <div className="card">
        <h1></h1>
        <span></span>
        <button onClick={fecharCard}>Fechar</button>
      </div>
    </div>
  )
}