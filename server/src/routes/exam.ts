import { FastifyInstance } from "fastify"
import { z } from "zod"
import { prisma } from "../lib/prisma"

export async function examRoutes(fastify: FastifyInstance) {
   fastify.get('/search/:s', async (request, reply) => {
      const getExamParams = z.object({
         s: z.string(),
      })
      const { s } = getExamParams.parse(request.params)

      const exams = await prisma.exam.findMany({
         where: {
            name: {
               startsWith: s,
            },
         },
         orderBy: {
            name: 'asc',
         }
      })

      return {
         exams
      }
   })

   fastify.get('/search/exam', async (request, reply) => {

      const exams = await prisma.exam.findMany({
         orderBy: {
            name: 'asc',
         }
      })

      return reply.status(200).send(exams)

      
   })

   // fastify.post('/addExam')
}

