# {{ name }}

> {{ description }}

#### Build Setup

``` bash
{{#if autoInstall}}{{else}}
# install dependencies
npm run install
{{/if}}

# serve with hot reload at localhost:4000
{{#if_eq autoInstall 'yarn'}}yarn{{else}}npm run{{/if_eq}} dev

# build storybook as Single Page Application
{{#if_eq autoInstall 'yarn'}}yarn{{else}}npm run{{/if_eq}} build:storybook

# build vue component for production
{{#if_eq autoInstall 'yarn'}}yarn{{else}}npm run{{/if_eq}} build:component
```



## Usage

```html
<{{name}} hello="Hello world!!!" @click="clicked">
</{{name}}>
```

```js
  methods: {
    clicked (helloText) {
      console.log(helloText)
    }
  }
```

### Props

| Prop name | Description | Type | Required | Default value |
|---------- |-------- |---------- |---------- |---------- |
| `hello` | set hello text | `String` | no | `''` |

### Events

| Event name | Description | Parameters |
|---------- |-------- |---------- |
| `click` | fire when hello text is clicked | helloText: `String` |

### Slots

| Slot name | Description | Accepted Element |
|---------- |-------- |---------- |
| `default` | slot without name are placed in default | `any` |

---
This component was generated with [vue-authoring-template](https://github.com/DrSensor/vue-authoring-template) using [vue-cli](https://github.com/vuejs/vue-cli).
