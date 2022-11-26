import Head from 'next/head'

import { useRouter } from 'next/router'

import Header from '../../components/Header'
import Main from '../../components/Main'
import Footer from '../../components/Footer'

export default function Home() {
   const router = useRouter()

   return (
      <div className="py-0 px-8">
         <Head>
            <title>Home | ConstrolS</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Header col1='' link1='/' />

         <Main>

            <p className='text-6xl pb-12'>
               Conteúdo da Home - Logado
            </p>

            <p>
               <a
                  onClick={() => { router.push('/user/analise') }}
                  className="cursor-pointer">
                  Analisar Resultados
               </a>
            </p>

            <p>
               <a
                  onClick={() => { router.push('/new/result') }}
                  className="cursor-pointer">
                  Inserir Novos Exames
               </a>
            </p>

            <p>
               <a
                  onClick={() => { router.push('/new/exam') }}
                  className="cursor-pointer">
                  Pedir para inserir novos exames
               </a>
            </p>


         </Main>

         <Footer />

      </div>
   )
}