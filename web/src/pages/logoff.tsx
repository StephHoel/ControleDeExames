import { useRouter } from 'next/router';

import { RemoveUserSession } from '../components/CookieSession';

import Main from '../components/Main';

export default function Logoff() {
   const router = useRouter()

   RemoveUserSession()

   router.push('/')

   return (
      <Main title="Logoff">
         Saindo...
      </Main>
   )
}