import Head from 'next/head'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { api } from '../lib/axios'

import Main from '../components/Main';
import Input from '../components/Input'
import ButtonSubmit from '../components/Button'

export default function Register() {
   const [user, setUser] = useState('')
   const [pass, setPass] = useState('')

   const [name, setName] = useState('')
   const [email, setEmail] = useState('')

   const router = useRouter()

   async function register(event: FormEvent) {
      event.preventDefault()
      try {
         const response = await api.post('/register', {
            user,
            pass,
            name,
            email,
         });

         const status = response.data.message

         setUser('')
         setPass('')
         setName('')
         setEmail('')

         if (status == 'User registered successfully') {
            alert('Usuário cadastrado com sucesso!\nFaça o login para acessar sua conta!')
            router.push('/')
         } else {
            alert('ERRO! Falha ao tentar registrar. Não sabe o que aconteceu, mas você pode tentar novamente mais tarde.')
         }
      } catch (error) {
         console.log(error)
         alert('Falha ao tentar registrar, tente novamente!')
      }
   }

   return (
      <div className="py-0 px-8">
         <Head>
            <title>Cadastro | ConstrolS</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Main>

            Cadastro de Usuário

            <form onSubmit={register} className="mt-10 flex gap-2 flex-col w-[400px] justify-center">
               <Input
                  type="text"
                  placeholder="Nome"
                  onChange={event => setName(event.target.value)}
                  value={name}
               />
               <Input
                  type="email"
                  placeholder="E-mail"
                  onChange={event => setEmail(event.target.value)}
                  value={email}
               />
               <Input
                  type="text"
                  placeholder="Usuário"
                  onChange={event => setUser(event.target.value)}
                  value={user}
               />
               <Input
                  type="password"
                  placeholder="Senha"
                  onChange={event => setPass(event.target.value)}
                  value={pass}
               />
               <ButtonSubmit>
                  Cadastro
               </ButtonSubmit>
            </form>

         </Main>
      </div>
   )
}