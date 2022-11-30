import { useRouter } from 'next/router'

import Main from '../../components/Main'
import Page from '../../components/Page'

export default function Exam() {
   const router = useRouter()

   return (
      <Page col1={''} link1={''}>
         <Main title="Exam">
            Pedido de Exame
         </Main>
      </Page>
   )
}