#!/usr/bin/env node
/* eslint-disable unicorn/prefer-top-level-await */
import os from 'node:os';
import path from 'node:path';

import { createServer } from '@myproject/ssr';
import dotenv from 'dotenv';


const envFile = {
  development: '.env.dev',
  production: '.env'
};

dotenv.config({ path: path.resolve(process.cwd(), envFile[process.env['NODE_ENV'] as keyof typeof envFile]) });

const HOST = process.env['HOST'] ?? '0.0.0.0';
const PORT = Number(process.env['PORT']) || 3000;

const initialSourceFiles = {
  root: process.cwd(),
  buildPath: path.join(process.cwd(), '/dist'),
};

createServer({ sourcePath: initialSourceFiles })
  .then((server) => {
    server.listen({
      port: PORT,
      host: HOST,
    },
      (error, address) => {
        if (error) {
          console.log('server catch error', error);
          process.exit(1);
        } else {
          const networkInterfaces = os.networkInterfaces();
          const ipAddress = networkInterfaces?.['en0']?.[0]?.address;

          console.log('\u001B[36m%s\u001B[0m', `Listening on: ${address.replace(HOST, 'localhost')}`);

          if (ipAddress) {
            console.log('\u001B[36m%s\u001B[0m', `Connect from other device: ${address.replace(HOST, ipAddress)}`);
          }
        }
      },
    );
  }).catch((error) => {
    console.log('server catch error', error);
    process.exit(1);
  });
