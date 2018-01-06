# vue-authoring-template (Work In Progress)
[![CircleCI](https://circleci.com/gh/DrSensor/vue-authoring-template.svg?style=shield)](https://circleci.com/gh/DrSensor/vue-authoring-template)
<!-- [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat-square)](https://github.com/DrSensor/vue-authoring-template/blob/master/DONATE.md) -->

Currently this project main goal is to help authoring Vue component with it's use case.

> Warning: not yet manually tested

## Motivation
There is a time when developer involved in a project then build component to solve specific problem 😎.
One day this developer happen to do the same thing again in different project with slight alteration 😏.
Then doing it again, and again, and again 😫.
Now this developer have build many component with the same topic 😂.
So, why not publish it as a single component with that one topic in mind to npm? 😲
However, the component must be showcased in [mvce](https://stackoverflow.com/help/mcve) style to make it easy to understand and maintainable 😖.
As the time passed, he/she is to lazy to do that because no template/config/cli/whatever for authoring the component in that way :poop:.

## Usage
```bash
vue init DrSensor/vue-authoring-template
```
to build component use
```
yarn build
```
to build the storybook use
```
yarn storybook:build
```
to start it in development mode (only development mode is supported) use
```
yarn storybook
```

## Project Structure
```markdown
template
├── package.json            // choose and configure the component you want to package in here (still need to edit `scripts: {}` block)
├── FOOTER.md               // [addon: storybook/readme] footer to show at the bottom of scenario description (currently not working)
├── .editorconfig
├── .gitignore
│
├── .circleci
│   └── config.yml
├── .loader                 // loader for processing custom blocks
│   ├── docs-loader.js
│   ├── info-loader.js
│   └── notes-loader.js
├── .storybook
│   ├── addons.js
│   ├── config.js
│   └── poi.config.js       // currently the template project use `poi` as alternative of `vue build`
│
├── components              // place 1 or more components to author here
│   └── HelloWorld.vue
│
└── stories                 // use case or usage of the component written in story-scenario analogy
    ├── Story1
    │   └── Scenario1.vue
    ├── Story2
    ├── Story3
    ├── config.js           // config to order the story and the scenario
    └── index.js            // chain and add the addon here (looking for elegant way to add Knob)
```

## Feature
- Prebuilt [circleci](https:circleci.com) config to build, deploy, and evaluate pull-requests. By default its deployed to [surge.sh](https://surge.sh)
- Preinstall and configured storybook addon and webpack loader:
  - @storybook/addon-console for outputing console
  - `storybook-readme` for insert `README.md` into the book (still buggy in `withDocs` function)
  - `raw-loader` to make it able to import markdown or text file
- Order the story/scenario alphabetically or define it using `Array`/`Object` in `stories/config.js`

## TODO
- Integrate `@storybook/addon-knobs`
- Make adding knobs and chaining the addon on each scenario in elegant way
- Leverage `vue-loader` [custom block](https://vue-loader.vuejs.org/en/configurations/custom-blocks.html) for defining docs, info, and notes. (or maybe knobs but still don't have idea how to integrate it with `<template>` and/or `<script>` tag). Note that custom blocks can only be used in story.
- Customize style of the storybook
- support `vue init` cli workflow (still in progress)

## Support
See [CONTRIBUTING.md](https://github.com/DrSensor/vue-authoring-template/blob/master/CONTRIBUTING.md) for contributing directly via:
- [Pull Requests](https://github.com/DrSensor/vue-authoring-template/blob/master/CONTRIBUTING.md/#pull-requests) or
- [Create Issues](https://github.com/DrSensor/vue-authoring-template/blob/master/CONTRIBUTING.md/#create-issues)

<!-- For donation see [DONATE.md](https://github.com/DrSensor/vue-authoring-template/blob/master/DONATE.md) -->

## License
[MIT](https://github.com/DrSensor/vue-authoring-template/blob/master/LICENSE) License
