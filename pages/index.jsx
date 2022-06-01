import Head from 'next/head'
import Image from 'next/image'


import Read from "../components/read"
import Cadastrar from "../components/create"


export default function Home() {

  return (
    <>
    <Head>
      <title>Crud Simples Com Firestorm</title>
    </Head>
    <div className="container">
      <div className="row">
        <div className="col-lg">
          <Cadastrar></Cadastrar>
        </div>
        <div className="col-lg">
          <Read></Read>
        </div>
      </div>
    </div>

    </>



  )


}
