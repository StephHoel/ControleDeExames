import { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { api } from '../lib/axios'

import MD5 from 'crypto-js/MD5';

import { OpenUserSession, VerifyNotSession } from '../components/CookieSession';

import styles from "../styles/style.module.css";

import Input from '../components/Input';
import ButtonSubmit from '../components/Button';
import Page from '../components/Page';

export default function Index() {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  const router = useRouter()

  async function loginUser(event: FormEvent) {
    event.preventDefault()
    try {
      const response = await api.post('/login', {
        user,
        pass: MD5(pass).toString(),
      });

      const status = response.data.message

      setUser('')
      setPass('')

      if (status == 'User logged successfully') {
        // console.log("Acessou")
        OpenUserSession(response.data.userId)

        router.push({ pathname: '/user/home', query: { name: user } }, '/home')
      } else {
        alert('Usuário e/ou Senha incorretos!')
      }
    } catch (error) {
      console.log(error)
      alert('Falha ao tentar acessar, tente novamente!')
    }
  }

  VerifyNotSession()

  return (
    <Page title="Index">

      <p className="m-0 text-3xl text-center">
        Seu site para guardar os resultados de exames laboratoriais
      </p>

      <p className="py-8 text-2xl">
        Pegue seus resultados online no laboratório e adicione os resultados aqui, assim no próximo exame você ter noção se seus resultados estão melhores ou não.
      </p>

      <p className="text-xl">
        Faça seu login abaixo ou
        <a className="cursor-pointer hover:text-[#535353]" onClick={() => { router.push('/register') }}> cadastre-se aqui</a>.
      </p>

      <form onSubmit={loginUser} className={styles.form}>
        <Input
          type="text"
          placeholder="Username"
          onChange={event => setUser(event.target.value)}
          value={user}
        />
        <Input
          type="password"
          placeholder="Password"
          pattern="[a-z0-9]{1,15}"
          onChange={event => setPass(event.target.value)}
          value={pass}
        />
        <ButtonSubmit>
          Login
        </ButtonSubmit>

      </form>
    </Page>
  )
}
