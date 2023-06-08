# `Monorepo with turborepo, TS, react and VPS`

## RUN
- npm i

#### Development
- npm run dev

#### Production
- npm run start

### Apps and Packages

#### Apps
- `docs`: a vanilla [vite](https://vitejs.dev) ts app
- `web`: it's an example of Domain [Feature sliced desing](https://feature-sliced.design/) project structure, but you can use any other structure, see [VPS](https://github.com/brillout/vite-plugin-ssr) docs

#### Packages
- `ui`: shared ui components for `web` and `docs` apps
- `eslint-config-custom`: shared `eslint` configurations
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `vite`: vite config
