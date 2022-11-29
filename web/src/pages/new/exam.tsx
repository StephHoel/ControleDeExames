import { useRouter } from 'next/router'

import Main from '../../components/Main'

export default function Exam() {
   const router = useRouter()

   return (
      <Main title="Exam">
         Pedido de Exame
      </Main>
   )
}