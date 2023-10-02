import { useRouter } from 'next/router';

import { RemoveUserSession, VerifySession } from '../components/CookieSession';

import Page from '../components/Page';

export default function Logoff() {
   VerifySession()

   const router = useRouter()

   RemoveUserSession()

   router.push('/')

   return (
      <Page title="Logoff">
            Saindo...
      </Page>
   )
}