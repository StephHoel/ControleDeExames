import { FastifyInstance } from "fastify"
import { z } from "zod"
import { prisma } from "../lib/prisma"

export async function userRoutes(fastify: FastifyInstance) {
   fastify.post('/register', async (request, reply) => {
      try {
         const createUser = z.object({
            user: z.string(),
            pass: z.string(),
            name: z.string(),
            email: z.string().email(),
         })

         const { user, pass, name, email } = createUser.parse(request.body)

         await prisma.user.create({
            data: {
               user,
               pass,
               name,
               email,
            }
         })

         return reply.status(201).send({ message: 'User registered successfully' })
      } catch {
         return reply.status(500).send({ message: 'FAIL: User not registered' })

      }

   })

   fastify.post('/login', async (request, reply) => {
      const loginUser = z.object({
         user: z.string(),
         pass: z.string(),
      })

      const { user, pass } = loginUser.parse(request.body)

      const userFind = await prisma.user.findUnique({
         where: {
            user,
         },
      })

      if (userFind?.user == user
         && userFind?.pass == pass
      ) {
         return reply.status(201).send({
            message: 'User logged successfully',
            userId: userFind.id
         })

      } else {
         return reply.status(401).send({ message: 'User or Pass incorrect' })
      }

   })
}