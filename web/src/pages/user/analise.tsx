import { useRouter } from 'next/router'
import { VerifySession } from '../../components/CookieSession'

import Page from '../../components/Page'

export default function Analise() {
   VerifySession()

   const router = useRouter()

   return (
      <Page title="Analise" >
            Analisar
      </Page>
   )
}