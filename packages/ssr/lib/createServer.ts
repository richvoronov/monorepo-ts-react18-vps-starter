import fastify, { FastifyInstance } from 'fastify';

import { getApp } from './getApp.ts';
import { getDevApp } from './getDevApp.ts';

export interface OptionSourcePath {
  root: string;
  buildPath: string;
}

export interface Options {
  sourcePath: OptionSourcePath;
}

export async function createServer(options: Options, isProduction = process.env['NODE_ENV'] === "production"): Promise<FastifyInstance> {
  const { buildPath, root } = options.sourcePath;

  const server = fastify();
  await server.register(import('@fastify/middie'));

  if (!isProduction) {
    return getDevApp({ server, root });
  }

  if (isProduction) {
    return getApp({ server, buildPath });
  }

  return server;
}