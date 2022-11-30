import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function DateFutureInMinutes(minutes: number) {
   let dataFutura = new Date().getTime()

   let milissegundos = 1000
   let segundos = 60
   dataFutura += milissegundos * segundos * minutes

   return dataFutura
}

function SetUserSession(id: string) {
   // define a sessao com duracao de 20 minutos
   Cookies.set('user', id, {
      expires: new Date(DateFutureInMinutes(20)),
      sameSite: 'strict'
   })
}

export function OpenUserSession(id: string) {
   // se tiver logado/com cookie, remover
   GetUserIdSession() ? RemoveUserSession() : ''

   // definir sessao
   SetUserSession(id)
}

export function GetUserIdSession() {
   // pegar e retornar o userId
   const id = Cookies.get('user')!
   return id
}

export async function VerifySession() {
   const router = useRouter()
   
   if (!GetUserIdSession()) { // se nao tiver logado
      // redirecionar para pagina principal
      useEffect(() => {
         router.push("/")
      },[])
   }
   else { // se tiver logado, extender
      SetUserSession(GetUserIdSession())
   }
}

export async function VerifyNotSession() {
   const router = useRouter()
   
   if (GetUserIdSession()) { // se tiver logado
      // redirecionar para pagina principal do usuario
      useEffect(() => {
         router.push("/user/home")
      },[])
   }
   // se nao estiver logado, nao faz nada
}

export function RemoveUserSession() {
   // apaga o cookie
   Cookies.remove('user')
}