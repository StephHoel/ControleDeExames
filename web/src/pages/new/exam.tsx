import Head from 'next/head'

import { useRouter } from 'next/router'

import Header from '../../components/Header'
import Main from '../../components/Main'
import Footer from '../../components/Footer'

export default function Exam() {
   const router = useRouter()

   return (
      <Main>
         Pedido de Exame
      </Main>
   )
}