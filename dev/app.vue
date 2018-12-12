<template>
  <section id="wrap">
    <form action="/">
      <p class="form-row">
        <vueSelect
          id="sel-1"
          :width="200"
          name="sel-1"
          :options="options"
          @vueSelectChanged="onChange"
        />
      </p>
      <p class="form-row">
        <vueSelect
          id="sel-2"
          :width="500"
          name="sel-2"
          :options="options"
          @vueSelectChanged="onChange"
        />
      </p>
    </form>
  </section>
</template>

<script>
import Vue from "vue";
import vueSelect from "../src";
Vue.use(vueSelect);

export default {
  name: "App",
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
  }),
  methods: {
    onChange(val) {
      console.log(val);
    }
  }
};
</script>
