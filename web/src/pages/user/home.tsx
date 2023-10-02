import { useRouter } from 'next/router'
import { ListPlus, MagnifyingGlass, Plus } from 'phosphor-react'

import styles from "../../styles/style.module.css";

import { VerifySession } from '../../components/CookieSession'

import Page from '../../components/Page'

export default function Home() {
   const router = useRouter()

   VerifySession()

   return (
      <Page title="Home">

         <div className="flex w-full ">
            <div className="w-[21%] p-5 text-left text-lg">
               <p className="text-center mb-4 text-3xl">
                  Menu
               </p>

               <p
                  onClick={() => { router.push('/user/analise') }}
                  className={styles.menu}
               >
                  <MagnifyingGlass />
                  Analisar Resultados
               </p>

               <p
                  onClick={() => { router.push('/new/result') }}
                  className={styles.menu}
               >
                  <Plus />
                  Novo Resultado
               </p>

               <div className="w-full h-px bg-gray-300 mt-8 mb-4" />

               <p
                  onClick={() => { router.push('/new/exam') }}
                  className={styles.menu}
               >
                  <ListPlus size={40} />
                  Pedir para inserir novos exames
               </p>
            </div>
            <div className="w-px bg-gray-300" />
            <div className="w-[70%] p-5 ">
               <p className='text-3xl pb-12 whitespace-pre-line'>
                  Olá{router.query.name ? ', ' + router.query.name : ''}!
                  {'\n\n'}
                  Seu último exame foi feito dia [xx/xx/xxx]
                  {'\n\n'}
                  .
               </p>
            </div>
         </div>
      </Page>
   )
}