# vue-authoring-template
<!-- [![CircleCI](https://circleci.com/gh/DrSensor/vue-authoring-template.svg?style=shield)](https://circleci.com/gh/DrSensor/vue-authoring-template) -->
![minimal config](https://img.shields.io/badge/config-minimal-grey.svg?maxAge=2592000&style=flat-square)
![circleci support](https://img.shields.io/badge/circleci-support-blue.svg?maxAge=2592000&style=flat-square)
![vue 2.x](https://img.shields.io/badge/vue-2.x-4fc08d.svg?maxAge=2592000&style=flat-square)
![storyboard 3.x](https://img.shields.io/badge/storybook-3.x-E91E63.svg?maxAge=2592000&style=flat-square)
[![donate](https://img.shields.io/badge/donate-$-yellowgreen.svg?maxAge=2592000&style=flat-square)](https://github.com/DrSensor/vue-authoring-template/blob/master/DONATE.md)

This template is to help authoring Vue component with it's use case in story-scenario (storybook) format.

![](./screenplay.gif)

Authoring component and publish it to `npm` for later use can help reduce complexity <sup><sup><sup><sup><sup>by delegating the work of finding bug and adding feature</sup></sup></sup></sup></sup> of big/long-running project <sub><sub><sub><sub><sub>to the community</sub></sub></sub></sub></sub>
## Motivation
1. There is a time when developer involved in a project then build component to solve specific problem 😎.
2. One day this developer happen to do the same thing again in different project with slight alteration 😏.
3. Then doing it again, and again, and again 😫.
4. Now this developer have build many component with the same topic 😂.
5. So, why not publish it as a single component with that one topic in mind to [`npm`](https://www.npmjs.com/)? 😲
6. However, the component must be showcased in [mvce](https://stackoverflow.com/help/mcve) style to make it easy to understand and maintainable 😖.
7. As the time passed, he/she is to lazy to do that because no template/config/cli/whatever for authoring the component in that way :poop:.

## Usage
```bash
vue init DrSensor/vue-authoring-template
```
After that,

- to build vue component use
```
[npm|yarn] build:component
```
- to build the storybook use
```
[npm|yarn] build:storybook
```
- to start it in development mode use
```
[npm|yarn] dev
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
│   ├── docs-loader.js
│   ├── info-loader.js
│   └── notes-loader.js
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

## Features
- Support `vue init` workflow
- Minimal configuration. Thanks to [poi](https://poi.js.org).
- Prebuilt [circleci](https:circleci.com) config to build, deploy, and evaluate pull-requests. By default its deployed to [surge.sh](https://surge.sh).
- Order the story-scenario *alphabetically* or define it using `Array`|`Object` in `src/stories/config.js`.
- Preinstall and configured storybook addon:
    - knobs
    - readme, info(experimental), and notes
    - actions
- Custom blocks (experimental, looking for feedback).

## Looking for suggestion (Open New Issues)
- Make chaining storybook-addon on each scenario in elegant way
- How to customize style of the storybook
- Authoring `Vuex` module? (is it necessary?)
- any others?

## Support
See [CONTRIBUTING.md](https://github.com/DrSensor/vue-authoring-template/blob/master/CONTRIBUTING.md) for contributing directly via:
- [Pull Requests](https://github.com/DrSensor/vue-authoring-template/blob/master/CONTRIBUTING.md/#pull-requests) or
- [Create Issues](https://github.com/DrSensor/vue-authoring-template/blob/master/CONTRIBUTING.md/#create-issues)

## License
[MIT](https://github.com/DrSensor/vue-authoring-template/blob/master/LICENSE) License
