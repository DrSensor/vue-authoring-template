# {{ name }}

> {{ description }}

<!-- Use https://github.com/phw/peek or https://github.com/ShareX/ShareX to record your component in action as gif -->
![](./screenplay.gif)

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


## Contributing
See [CONTRIBUTING.md](./CONTRIBUTING.md) for development guide.

---
This component was generated with [vue-authoring-template](https://github.com/DrSensor/vue-authoring-template) using [vue-cli](https://github.com/vuejs/vue-cli).
