'use client'

import { useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter()
  return (
    <section className="not-found">
      <h1><i className="fa-solid fa-triangle-exclamation" aria-hidden={true}></i> Erro!</h1>
      <p>A página não foi encontrada.</p>
      <button onClick={()=>router.replace("/")}>Voltar para a Home</button>
    </section>
  )
}