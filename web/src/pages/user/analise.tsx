import { useRouter } from 'next/router'
import { VerifySession } from '../../components/CookieSession'

import Header from '../../components/Header'
import Main from '../../components/Main'
import Page from '../../components/Page'

export default function Analise() {
   VerifySession()
   
   const router = useRouter()

   return (
      <Page>
         <Header col1={'Voltar'} link1={'/user/home'} />

         <Main title="Analise">
            Analisar
         </Main>
      </Page>
   )
}