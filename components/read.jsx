import { app, database } from '../service/firebase'
import { getDocs, orderBy, query } from 'firebase/firestore'
import { useState, useEffect } from 'react'


//read
const [lista,setLista] = useState([])
const read = ()=>{
  getDocs(query(contato,orderBy('nome','desc')))
  .then((data)=>{
    setLista(data.docs.map((item)=>{
      return{...item.data(),id:item.id}
    }))    
  }
  )
}

//mostrar documentos ao atualizar a página
useEffect(()=>{
  read()
},[])

export default function Read(){
  <>
    <Head>
      <title>CRUD simples com Firestore</title>
    </Head>
    <main className="container">
      <div className="row">
        <div className="col-md">
          <h3 className="text-center">Cadastrar</h3>
          <input
           type="text" placeholder="Nome"
           className="form-control" required
           onChange={event=>SetNome(event.target.value)}
           value={nome}/>
          <br/>
          <input type="tel" placeholder="Telefone"
           className="form-control" required
           onChange={event=>SetTelefone(event.target.value)}
           value={telefone}/>
          <br/>
          <input type="text" placeholder="Email"
           className="form-control" required
           onChange={event=>SetEmail(event.target.value)}
           value={email}/>
          <br/>
          <textarea placeholder="Mensagem" className="form-control"
           required onChange={event=>SetMensagem(event.target.value)}
           value={mensagem}/>
          <br/>
          <input type="submit" value="Salvar" className="btn btn-outline-dark form-control" onClick={create}/>
        </div>

        <div className="col-md">
          <h3 className="text-center">Exibir</h3>
          {lista.map((lista)=>{
            return(
            <>
              <div className="card">
                <div className="card-header bg-dark text-light" >
                Id: {lista.id}
                </div>
                <div className='card-body'>
                  <p className='card-title text-info'>Nome: {lista.nome}</p>
                  <p className='card-subtitle'>Email: {lista.email}</p>
                  <p className='card-subtitle'>Telefone: {lista.telefone}</p>
                  <p className='card-subtitle'>Mensagem: {lista.mensagem}</p>
                </div>
                <div className="card-footer">
                  <div className="input-group">
                  <input type="button" value="Alterar" className="btn btn-outline-warning"/>
                  <input type="button" value="Excluir" className="btn btn-outline-danger"/>
                  </div>
                </div>
              </div>
            </>
            )
          })}  
        </div>
      </div>
    </main>
  </>
}