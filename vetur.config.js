// vetur.config.js
/** @type {import('vls').VeturConfig} */
module.exports = {
  settings: {
    "vetur.useWorkspaceDependencies": true,
    "vetur.experimental.templateInterpolationService": true,
    "vetur.ignoreProjectWarning": true
  },
  projects: [
    './', // Shorthand for specifying only the project root location
    {
      root: './',
      package: './package.json',
      jsconfig: "./jsconfig.json",
      snippetFolder: './.vscode/vetur/snippets',

    }
  ]
}