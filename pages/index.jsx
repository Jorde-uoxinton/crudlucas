import Head from 'next/head'

//importar a config do firebase
import Read from"../components/read";
import Create from"../components/create";


export default function Home() {

  return (
    <>
      <Head>
        <title>Crud Simples com Firestore</title>
      </Head>
      <main className='container'>
      <div className="row">
        <div className="col-lg">
        <Create></Create>
      </div>
      <div className="col-lg">
          <Read></Read>
      </div>
      </div>
    </main>
        </>
  )
}
