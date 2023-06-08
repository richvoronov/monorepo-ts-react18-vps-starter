import { FastifyInstance } from 'fastify';

import { renderSsr } from './renderSsr.ts';

interface LocalApp {
  server: FastifyInstance;
  buildPath: string;
}

export async function getApp({ server, buildPath }: LocalApp): Promise<FastifyInstance> {
  await server.register(import('@fastify/compress'), { 
    threshold: 2048,
    global: true
  });

  await server.register(import('@fastify/static'), {
    root: `${buildPath}/client`,
    index: false,
    wildcard: false,
  });

  server.get('*', async (request, reply) => {
    // reply.headers({
		// 	"Cache-Control": "no-store, max-age=0, must-revalidate",
		// 	Expires: "0",
		// 	Pragma: "no-cache",
		// 	"Surrogate-Control": "no-store",
		// });

    try {
      const app = renderSsr({ request, reply });

      return app;
    } catch (error: any) {
      console.log('\u001B[36m%s\u001B[0m', 'Error ->', error);
      reply.status(500);
      return error?.stack;
    }
  });

  return server;
}