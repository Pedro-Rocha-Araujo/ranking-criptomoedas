import "./pesquisa.css"

interface PesquisaProps {
  pesquisa: string,
  setPesquisa: (pesquisa: string) => void
}

export default function Pesquisa({ pesquisa, setPesquisa }: PesquisaProps) {

  return (
    <form>
      <input  
        type="text"
        placeholder="Digite o nome da criptomoeda"
        required
        value={pesquisa}
        onChange={(e)=>setPesquisa(e.target.value)}
      />
      <button>
        <i className="fa-solid fa-magnifying-glass fa-lg" aria-hidden={true}></i>
      </button>
    </form>
  )
}