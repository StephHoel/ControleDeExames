import Fastify from "fastify";
import cors from "@fastify/cors";

import { userRoutes } from "./routes/user";
import { examRoutes } from "./routes/exam";
import { resultRoutes } from "./routes/result";

async function bootstrap() {
   const fastify = Fastify({
      logger: true,
   })

   await fastify.register(cors, {
      origin: true,
   })

   await fastify.register(userRoutes);
   await fastify.register(examRoutes);
   await fastify.register(resultRoutes);

   await fastify.listen({ port: 3333, host: '0.0.0.0' })
}

bootstrap()