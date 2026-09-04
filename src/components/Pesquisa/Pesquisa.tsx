import "./pesquisa.css"

export default function Pesquisa() {
  return (
    <form>
      <input  
        type="text"
        placeholder="Digite o nome da criptomoeda"
        required
      />
      <button>
        <i className="fa-solid fa-magnifying-glass fa-lg" aria-hidden={true}></i>
      </button>
    </form>
  )
}