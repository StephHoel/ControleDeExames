import { FastifyInstance } from "fastify"
import { z } from "zod"
import { prisma } from "../lib/prisma"

export async function resultRoutes(fastify: FastifyInstance) {
   fastify.post('/addResult', async (request, reply) => {
      const createResult = z.object({
         dateColeted: z.string(),
         result: z.string(),
         examId: z.string(),
         userId: z.string(),
      })

      const { title } = createPoolBody.parse(request.body)

      const generate = new ShortUniqueId({ length: 6 })
      const code = String(generate()).toUpperCase()

      try {
         await request.jwtVerify()

         await prisma.pool.create({
            data: {
               title,
               code,
               ownerId: request.user.sub,

               participants: {
                  create: {
                     userId: request.user.sub,
                  }
               }
            }
         })
      } catch {
         await prisma.pool.create({
            data: {
               title,
               code,
            }
         })
      }

      return reply.status(201).send({ code, title })
   })


}