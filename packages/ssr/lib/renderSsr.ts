import { FastifyReply, FastifyRequest } from 'fastify';
import { renderPage } from 'vite-plugin-ssr/server';

export const renderSsr = async ({ request, reply }: {
  request: FastifyRequest;
  reply: FastifyReply;
}) => {
  const pageContextInit = {
    urlOriginal: request.url
  };

  const pageContext = await renderPage(pageContextInit);
  const { httpResponse } = pageContext;

  if (!httpResponse) {
    return reply.code(404).type('text/html').send('Not Found');
  }
  
  const { body, statusCode, contentType, earlyHints } = httpResponse;

  if (reply.raw.writeEarlyHints) {reply.raw.writeEarlyHints({ link: earlyHints.map((event) => event.earlyHintLink) });}
  
  return reply.status(statusCode).type(contentType).send(body);
};