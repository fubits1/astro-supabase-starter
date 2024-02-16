# Demo on how to use Astro with Supabase

> this repo uses `pnpm`, `Node v20`, `Astro 4`, and `supabase-js 2`

## Setup

### Supabase

1. Create a new Supabase project; add some data (e.g. upload a CSV and note the table name)
2. add Supabase URL and Auth for your project to `.env` file (see `.env.example`) ([Documentation](https://supabase.com/docs/reference/javascript/initializing))
3. set table name `tableName` as props in `src/pages/index.astro`:

  ```astro
  <DataList tableName={'countries'} />
  ```

> Consider moving the table name to the .env variable as well

### Astro

- `pnpm install`
- `pnpm dev`

## Notes

- in order not to leak the Supabase URL and Auth token to the client
  - we use `.env` file to store them
  - delegate the API call to the server side
    - cf. [documentation on Astro's `server`and `hybrid` modes](https://docs.astro.build/en/guides/server-side-rendering/) and how to set up an adapter (node, vercel, netlify, cloudflare)

> initial README.md content below

---

# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
