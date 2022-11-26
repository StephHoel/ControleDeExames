import Head from 'next/head'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { api } from '../lib/axios'

import Main from '../components/Main';
import Input from '../components/Input';
import ButtonSubmit from '../components/Button';
import Footer from '../components/Footer';

export default function Index() {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  const router = useRouter()

  async function loginUser(event: FormEvent) {
    event.preventDefault()
    try {
      const response = await api.post('/login', {
        user,
        pass,
      });

      const status = response.data.message

      setUser('')
      setPass('')

      if (status == 'User logged successfully') {
        console.log("Acessou")
        router.push('/user/home')
      } else {
        alert('Usuário e/ou Senha incorretos!')
      }
    } catch (error) {
      console.log(error)
      alert('Falha ao tentar acessar, tente novamente!')
    }
  }

  return (
    <div className="py-0 px-8">
      <Head>
        <title>Home | ControlS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <p className="m-0 text-6xl text-center">
          ControlS
        </p>
        <p className="m-0 text-4xl text-center">
          Seu site para guardar os resultados de exames laboratoriais
        </p>

        <p className="py-8 text-3xl">
          Pegue seus resultados online no laboratório e adicione os resultados aqui, assim no próximo exame você ter noção se seus resultados estão melhores ou não.
        </p>

        <p className="text-2xl">
          Faça seu login abaixo ou
          <a className="cursor-pointer hover:text-[#535353]" onClick={() => { router.push('/register') }}> cadastre-se aqui</a>.
        </p>

        <form onSubmit={loginUser} className="mt-10 flex gap-2 flex-col w-[400px] justify-center">
          <Input
            type="text"
            placeholder="Username"
            onChange={event => setUser(event.target.value)}
            value={user}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={event => setPass(event.target.value)}
            value={pass}
          />
          <ButtonSubmit>
            Login
          </ButtonSubmit>

        </form>

      </Main>

      <Footer />

    </div>
  )
}
