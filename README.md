# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```shell
npm install
```

### Local Development

```shell
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```shell
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```shell
USE_SSH=true yarn deploy
```

Not using SSH:

```shell
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### OpenAPI documentation

Markdown files under api-reference folder are generated semi-automatically by the openapi-docs plugin. The plugin uses immersve.yaml as an input.
To edit api reference, modify immersve.yaml (not the derived markdown files). Then run:

```shell
yarn api-re-gen
```

### Formatting Markdown

Wrap your markdown. It makes diffs easier to read.

Install the [Rewrap extension](https://marketplace.visualstudio.com/items?itemName=stkb.rewrap)
Select text then hit the chord `Alt + Q`

### Style

Check your spelling, grammar and readability using [Hemingway Editor](https://hemingwayapp.com/)
