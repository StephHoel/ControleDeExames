import styles from '../styles/style.module.css'

import MD5 from 'crypto-js/MD5';

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { api } from '../lib/axios'
import { VerifyNotSession } from '../components/CookieSession';

import Page from '../components/Page';
import Input from '../components/Input'
import ButtonSubmit from '../components/Button'

export default function Register() {
   VerifyNotSession()

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
            pass: MD5(pass).toString(),
            name,
            email,
         });

         const status = response.data.message

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
      <Page title="Cadastro">
         Cadastro de Usuário

         <form onSubmit={register} className={styles.form}>
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

      </Page>
   )
}