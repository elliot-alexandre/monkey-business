# storefront

`Product Shop Webiste`

---

## Description

The following project is built as a meno repo with `turbo repo`. The goal behind
this choice is to create a single repo with all the environment responsible of
building the website and feeding it with data.

The following app is based on the
[Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) philosophy
for the front-end integration. It's used for the Themable requirement for the
apps. The idea is to have an infinite amount of Theme. The logic of color
management is important with theme variables based on the logic of the design.

The choice of `Strapi` is for having a Headless CMS without limitation and
excessive pricy tiers. It's self-hosted, so it will need a separate deployment
and management of authorization to avoid unauthorized access.

For the app `Next.js` was choosen for the ssr capabilties that are suffisant for
the project and the serverless components that could be helping the website on
the performance for a better lighthouse score. GraphQL queries could be run on
the run-time if the query is too important for it to be in the build.
(Pagination can be added)

---

## Prerequisite

- Node Version `>=14.0.0`
- Yarn Version `>=1.22.17`
- Prettier
- Install [GraphQL Playground](https://github.com/graphql/graphql-playground)
- \*Deployment [Vercel](https://vercel.com/docs)
  - Make sure to be part of the organisation and link your github account to the
    vercel account for the `github actions` used for preview works.
- Acces the Design System and Prototype on [Figma](https://www.figma.com/)

## Dependencies

Documentation needed for the basic dependecencies used.

- [vanilla-extract](https://vanilla-extract.style/)
- [Next.js](https://nextjs.org/docs)
- [Mdx](https://mdxjs.com/docs/)
- [Strapi](https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html)
- [GraphQL](https://graphql.org/learn/)
- [Apollo](https://www.apollographql.com/docs/react/)

---

## Environment

The folder `/apps` is for all apps relative to the website front-end. The folder
`/package` is for all package related to the back-end of the website (Strapi
GraphQL endpoint + Serverless functions).

- ### Root scripts

  - `yarn open` : Open the vscode workspace
  - `yarn reset` : Delete all node modules and re-install all the dependencies.
  - `yarn format` : Format files with the prettier config.
  - `yarn dev` : Starting all apps and packages.
  - `yarn build` : Build all apps and packages.

<br/>

- ### Website scripts
  - `yarn open` : Open the vscode workspace
  - `yarn reset` : Delete all node modules and re-install all the dependencies.
  - `yarn format` : Format files with the prettier config.
  - `yarn dev` : Starting all apps and packages.
  - `yarn build` : Build all apps and packages.

<br/>

- ### Strapi scripts

  - `yarn dev` : Building admin app for modification of content models schema.
  - `yarn build` : Build the CMS app for production.
  - `yarn start` : Start the precise build of the CMS done by the previous
    command.
  - `yarn strapi` : Output help command for strapi.

## Packages Documentation

Links for all the `README.md` in the mono-repo.

- ### [App-Documentation](./apps/storefront-website/README.md)
- ### [Strapi-Documentation](./packages/strapi/README.md)
