# vue-simplest-select

The simplest Vue2 select component

## Installation

```js
npm i --save-dev vue-simplest-select
```

### Browser

Include the script file, then install the component with `Vue.use(vueSelect);` e.g.:

```html
<script
  type="text/javascript"
  src="node_modules/vuejs/dist/vue.min.js"
></script>
<script
  type="text/javascript"
  src="node_modules/vue-simplest-select/dist/vue-simplest-select.min.js"
></script>
<script type="text/javascript">
  Vue.use(vueSelect);
</script>
```

### Module

```js
import vueSelect from "vue-simplest-select";
```

## Usage

Once installed, it can be used in a template as simply as:

```html
<vueSelect
  id="demo-id"
  :width="200"
  name="demo-id"
  :options="options"
  @vueSelectChanged="onChange"
>
</vueSelect>
```

in your data add array with options:

```js
data: () => ({
  options: [
    {
      label: "Option 1",
      value: "value 1"
    },
    {
      label: "Option 2",
      value: "value 2"
    },
    {
      label: "Option 3",
      value: "value 3"
    },
    {
      label: "Option 4",
      value: "value 4"
    },
    {
      label: "Option 5",
      value: "value 5"
    }
  ]
});
```
