'use client'

import { useState } from "react"
import "./pesquisa.css"

export default function Pesquisa() {
  const [pesquisa, setPesquisa] = useState<string>("")

  function pesquisar(e:React.FormEvent) {
    e.preventDefault()
    alert(pesquisa + " pesquisada")
  }

  return (
    <form onSubmit={pesquisar}>
      <input  
        type="text"
        placeholder="Digite o nome da criptomoeda"
        required
        onChange={(e)=>setPesquisa(e.target.value)}
      />
      <button>
        <i className="fa-solid fa-magnifying-glass fa-lg" aria-hidden={true}></i>
      </button>
    </form>
  )
}