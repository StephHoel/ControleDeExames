import { useRouter } from 'next/router'

import { VerifySession } from '../../components/CookieSession'

import Page from '../../components/Page'
import Header from '../../components/Header'
import Main from '../../components/Main'

export default function Home() {
   VerifySession()

   const router = useRouter()

   return (
      <Page>
         <Header col1='' link1='/' />

         <Main title="Home">

            <p className='text-6xl pb-12'>
               Conteúdo da Home - Logado
            </p>

            <p>
               <a
                  onClick={() => { router.push('/user/analise') }}
                  className="cursor-pointer"
               >
                  Analisar Resultados
               </a>
            </p>

            <p>
               <a
                  onClick={() => { router.push('/new/result') }}
                  className="cursor-pointer"
               >
                  Inserir Novos Exames
               </a>
            </p>

            <p>
               <a
                  onClick={() => { router.push('/new/exam') }}
                  className="cursor-pointer"
               >
                  Pedir para inserir novos exames
               </a>
            </p>


         </Main>

      </Page>
   )
}