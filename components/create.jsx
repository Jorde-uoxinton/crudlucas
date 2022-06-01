import { app, database } from '../service/firebase'
import { collection, addDoc, getDocs, orderBy, query } from 'firebase/firestore'
import { useState, useEffect } from 'react'

//definir coleção
const contato = collection(database, 'contato')

  //hooks
  const[nome, SetNome]=useState('')
  const[email, SetEmail]=useState('')
  const[telefone, SetTelefone]=useState('')
  const[mensagem, SetMensagem]=useState('')

  export default function Create() {
  //create
  const create = ()=>{
    addDoc(contato,
    {
      nome:nome,
      telefone:telefone,
      email:email,
      mensagem:mensagem
    }).then(()=>{
      SetNome('')
      SetEmail('')
      SetTelefone('')   
      SetMensagem('')
      read()
    })
  }
}