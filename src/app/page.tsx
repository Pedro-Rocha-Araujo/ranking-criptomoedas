'use client'

import { useState, useEffect } from "react"
import axios from "axios";
import "dotenv/config"
import Pesquisa from "@/components/Pesquisa/Pesquisa";
import Listagem from "@/components/Listagem/Listagem"
import { Cripto } from "@/interfaces";

export default function Home() {
  const [lista, setLista] = useState<Cripto[]>()

  useEffect(()=> {
    async function getItens() {
      const chave = "531b61da81421169d435c716beb34667804fb6c31b9f824251e3f2c370931786"
      if(!chave) {
        return
      }
      const response = await axios.get(`https://rest.coincap.io/v3/assets?limit=10&offset=0&apiKey=${chave}`)
      setLista(response.data.data)
    }
    getItens()
  }, [])

  return (
    <>
      <Pesquisa />
      <Listagem lista={lista} />
    </>
  );
}
