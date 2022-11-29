import { useRouter } from 'next/router'
import { FormEvent, useEffect, useState } from 'react';

import { api } from "../../lib/axios";

import styles from "../../styles/style.module.css";

import { GetUserIdSession, VerifySession } from '../../components/CookieSession';

import Page from '../../components/Page'
import Header from '../../components/Header'
import Main from '../../components/Main'
import Input from '../../components/Input'
import ButtonSubmit from '../../components/Button'

interface Exame {
   id?: string, name?: string, type?: string
}

export default function Result() {
   VerifySession()

   const [date, setDate] = useState('')
   const [exam, setExam] = useState('')
   const [result, setResult] = useState('')
   const [exames, setExames] = useState([]);

   const router = useRouter()

   useEffect(() => {
      async function getExams() {
         try {
            const res = await api.get(`/search/exam`);

            const result = await res.data;
            //console.log(result)
            setExames(result);
         } catch (error) {
            console.log(error)
         }
      }
      getExams();
   }, [])

   async function addResult(event: FormEvent) {
      event.preventDefault()

      var examName: Exame
      examName = exames.find(({ name }) => name == exam.split(' ')[0].trim())!

      const examId = examName.id
      const userId = GetUserIdSession()

      console.log("Data: " + date)
      console.log("Exame: " + exam)
      console.log("Resultado: " + result)
      console.log("ExamId: " + examId)
      console.log("UserId: " + userId)

      try {
         const response = await api.post('/addResult', {
            dateColeted: date.toString(),
            result,
            examId,
            userId,
         });

         alert('Resultado Cadastrado com Sucesso!')

         //limpando os campos
         setExam('')
         setResult('')

         console.log("Exame: " + exam)
         console.log("Resultado: " + result)
      }
      catch (err) {
         console.log(err)
         //alert('Falha ao cadastrar resultado, tente novamente!')
      }

   }




   return (

      <Page>

         <Header col1='Voltar' link1='/user/home' />

         <Main title="Results">
            Cadastro de Resultados

            <form onSubmit={addResult} className={styles.form}>

               <Input
                  type={'date'}
                  onChange={event => setDate(event.target.value)}
                  value={date}
               />

               <Input
                  list="exam"
                  name="examId"
                  id="examId"
                  placeholder="Escolha o Exame"
                  type='text'
                  onChange={event => setExam(event.target.value)}
                  value={exam}
               />
               <datalist id="exam">
                  {
                     exames.map((item: Exame) => (
                        <option key={item.id}>{item.name} ({item.type})</option>
                     ))
                  }
               </datalist>

               <Input
                  type={'number'}
                  placeholder='Somente número do Resultado'
                  onChange={event => setResult(event.target.value)}
                  value={result}
               />

               <ButtonSubmit>
                  Enviar
               </ButtonSubmit>
            </form>

         </Main>

      </Page>
   )
}