# Contributing to {{name}}

> This is where you write guideline how people can make contribution to your component for sake of maintainability.

For anyone who want to contribute, read this guideline below.

## Build Setup

``` bash
# install dependencies
{{#if_eq autoInstall 'yarn'}}
yarn
{{else}}
npm run install
{{/if_eq}}

# serve with hot reload at localhost:4000
{{#if_eq autoInstall 'yarn'}}yarn{{else}}npm run{{/if_eq}} dev

# build storybook as Single Page Application
{{#if_eq autoInstall 'yarn'}}yarn{{else}}npm run{{/if_eq}} build:storybook

# build vue component for production
{{#if_eq autoInstall 'yarn'}}yarn{{else}}npm run{{/if_eq}} build:component
```

## Component Structure

```markdown
{{name}}
└── components                    // Tips: use mixins and/or extends if you build single yet complex component
    └── {{pascalCase name}}.vue
```

## Project Structure

This project use default [vue-authoring-template](https://github.com/DrSensor/vue-authoring-template#project-structure) project structure.
