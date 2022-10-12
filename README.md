# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### OpenAPI documentation
Markdown files under api-reference folder are generated semi-automatically by the openapi-docs plugin. The plugin uses immersve.yaml as an input.
To edit api reference, modify immersve.yaml, and not the derived markdown files. Then run the following commands:
```
yarn docusaurus clean-api-docs immersve
yarn docusaurus gen-api-docs immersve
```