# vue-authoring-template
<!-- [![CircleCI](https://circleci.com/gh/DrSensor/vue-authoring-template.svg?style=shield)](https://circleci.com/gh/DrSensor/vue-authoring-template) -->
<sub>Click one of this badge for more info</sub>

[![minimal config](https://img.shields.io/badge/config-minimal-grey.svg?maxAge=2592000&style=flat-square)](https://poi.js.org)
[![circleci support](https://img.shields.io/badge/circleci-support-blue.svg?maxAge=2592000&style=flat-square)](https://circleci.com/docs/1.0/npm-continuous-deployment/)
[![surge support](https://img.shields.io/badge/deploy_to-surge-63c299.svg?maxAge=2592000&style=flat-square)](https://surge.sh/help/integrating-with-circleci)
[![vue 2.x](https://img.shields.io/badge/vue-2.x-4fc08d.svg?maxAge=2592000&style=flat-square)](https://vuejs.org/)
[![storyboard 3.x](https://img.shields.io/badge/storybook-3.x-E91E63.svg?maxAge=2592000&style=flat-square)](https://storybook.js.org/)
[![donate](https://img.shields.io/badge/donate-$-yellowgreen.svg?maxAge=2592000&style=flat-square)](https://github.com/DrSensor/vue-authoring-template/blob/master/DONATE.md)

---
This template is to help authoring Vue component with it's use case in story-scenario (storybook) format.

![](./screenplay.gif)

> In case you need to convince your Lead Dev to give you permission open-sourcing your work :

"Authoring component and publish it to `npm` for later use can help reduce complexity <sup><sup><sup><sup><sup>by delegating the work of finding bug and adding feature</sup></sup></sup></sup></sup> of big/long-running project <sub><sub><sub><sub><sub>to the community</sub></sub></sub></sub></sub>"

## Motivation

1. There is a time when developer involved in a project then build component to solve specific problem 😎
1. One day this developer happen to do the same thing again in different project with slight alteration 😏
1. Then doing it again, and again, and again 😫
1. Now this developer have build many component with the same topic 😂
1. So, why not publish it as a single component with that one topic in mind to [`npm`](https://www.npmjs.com/)? 😲
1. However, the component must be showcased in [mvce](https://stackoverflow.com/help/mcve) style to make it easy to understand and maintainable 😖
1. As the time passed, he/she is to lazy to do that because no template/config/cli/whatever for authoring the component in that way :poop:

## Features

- Support `vue init` workflow
- Minimal configuration. Thanks to [poi](https://poi.js.org)
- Write your storybook `story-scenario` (a.k.a *use case*) in `.vue` **single-file-component format**, not `.js` or `.jsx`
- Option to generate [circleci](https:circleci.com) config to: 
  - publish vue component to `npm` and `unpkg` <sub>(need to `git push --tags`)</sub>
  - deploy storybook page to [surge.sh](https://surge.sh)
  - evaluate pull-requests and temporarily deploy storybook page to `<name><#PR_number>.surge.sh` <sub>(auto teardown when PR is merged)</sub>
- Choose pre-installed and configured storybook addon:
  - [knobs](https://github.com/storybooks/storybook/tree/master/addons/knobs)
  - [actions](https://github.com/storybooks/storybook/tree/master/addons/actions)
  - docs related addon:
    - [readme](https://github.com/tuchk4/storybook-readme)
    - [notes](https://github.com/storybooks/storybook/tree/master/addons/notes)
- Order the story and scenario *alphabetically* or manually re-order using `Array|Object` in `src/stories/config.js`
- Auto generate [`README.md`](./template/README.md)
- Custom blocks (experimental, looking for feedback)

## Usage

```bash
vue init DrSensor/vue-authoring-template
```

After that, you can:

- start in development mode

```bash
[npm|yarn] dev
```

- deploy storybook page directly to http://surge.sh

```bash
[npm|yarn] run deploy
```

- publish component directly to http://npmjs.com

```bash
# see https://docs.npmjs.com/getting-started/semantic-versioning#semver-for-publishers
npm version [patch|minor|major]
npm publish
```

- build vue component

```bash
[npm|yarn] build:component      # as CJS module, the output will be in dist/
[npm|yarn] build:component:umd  # as UMD module, the output will be in umd/
```

- build the storybook page

```bash
[npm|yarn] build:storybook  # the output will be in .storybook/dist/
```

## Project Structure

```markdown
.
├── package.json            // choose and configure the component you want to package in here (still need to edit `scripts: {}` block)
├── .editorconfig
├── .gitignore
│
├── .circleci
│   └── config.yml
├── .loader                 // loader for processing custom blocks
│   └── docs-loader.js
├── .storybook
│   ├── addons.js
│   ├── config.js
│   └── poi.config.js       // currently the template project use `poi` as alternative of `vue build`
│
└── src
    ├── components              // place 1 or more components to author here
    │   └── HelloWorld.vue
    │
    ├── mixins                  // reduce complexity by separating any long code here
    │   ├── mix1.js
    │   └── mix2.js
    │
    └── stories                 // use case or usage of the component written in story-scenario analogy
        ├── Story1
        │   └── Scenario1.vue
        ├── Story2
        ├── Story3
        ├── config.js           // config to order the story and the scenario
        └── index.js            // chain and add the addon here
```

## Looking for suggestion! (Open/Comment New Issues)

- How to customize style of the storybook
- Authoring `Vuex` module? [Is it necessary?](https://github.com/DrSensor/vue-authoring-template/issues/3)
- any others?

## Support
See [CONTRIBUTING.md](https://github.com/DrSensor/vue-authoring-template/blob/master/CONTRIBUTING.md) for contributing directly via:
- [Pull Requests](https://github.com/DrSensor/vue-authoring-template/blob/master/CONTRIBUTING.md/#pull-requests) or
- [Create Issues](https://github.com/DrSensor/vue-authoring-template/blob/master/CONTRIBUTING.md/#create-issues)

## License
[MIT](https://github.com/DrSensor/vue-authoring-template/blob/master/LICENSE) License
