import { FastifyInstance } from 'fastify';
import { createServer as createViteServer } from "vite";

import { renderSsr } from './renderSsr.ts';

interface DevelopmentApp {
  server: FastifyInstance;
  root: string;
}

export async function getDevApp({ server, root }: DevelopmentApp): Promise<FastifyInstance> {
  const vite = await createViteServer({
    root,
    server: { middlewareMode: true },
    appType: 'custom'
  });

  server.use(vite.middlewares);

  server.get('*', async (request, reply) => {
    reply.headers({
			"Cache-Control": "no-store, max-age=0, must-revalidate",
			Expires: "0",
			Pragma: "no-cache",
			"Surrogate-Control": "no-store",
		});

    try {
      const app = renderSsr({ request, reply });

      return app;
    } catch (error: any) {
      vite.ssrFixStacktrace(error);
      console.log('\u001B[36m%s\u001B[0m', 'Error ->', error);
      reply.status(500);
      return error?.stack;
    }
  });

  return server;
}