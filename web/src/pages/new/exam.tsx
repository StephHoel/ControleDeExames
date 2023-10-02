import { useRouter } from 'next/router'

import Page from '../../components/Page'

export default function Exam() {
   const router = useRouter()

   return (
      <Page title="Exam">
            Pedido de Exame
      </Page>
   )
}