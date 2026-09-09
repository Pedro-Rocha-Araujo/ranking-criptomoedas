'use client'

import { useState, useEffect } from "react"
import axios from "axios";
import "dotenv/config"
import Pesquisa from "@/components/Pesquisa/Pesquisa";
import Listagem from "@/components/Listagem/Listagem"
import { Cripto } from "@/interfaces";

export default function Home() {
  const [lista, setLista] = useState<Cripto[]>()
  const [limite, setLimite] = useState<number>(5)
  console.log(lista)
  useEffect(()=> {
    async function getItens() {
      const chave = "531b61da81421169d435c716beb34667804fb6c31b9f824251e3f2c370931786"
      if(!chave) {
        return
      }
      const response = await axios.get(`https://rest.coincap.io/v3/assets?limit=${limite}&offset=0&apiKey=${chave}`)
      setLista(response.data.data)
    }
    getItens()
  }, [limite])

  function aumentarLimite() {
    setLimite(limite + 5)
  }

  function diminuirLimite() {
    setLimite(limite - 5)
  }

  return (
    <>
      <Pesquisa />
      <Listagem lista={lista} />
      <div className="container">
        { limite > 5 && (
          <button onClick={diminuirLimite} >Ver menos</button>
        ) }
        { limite <= 15 && (
          <button onClick={aumentarLimite}>Ver mais</button>
        ) } 
      </div>
    </> 
  );
}
