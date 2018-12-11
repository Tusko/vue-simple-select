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
import vueSelect from "../src";
export default {
  name: "App",
  components: {
    vueSelect
  },
  data: () => ({
    options: [
      {
        label: "Option 1",
        value: "V1"
      },
      {
        label: "Option 2",
        value: "V2"
      },
      {
        label: "Option 3",
        value: "V3"
      },
      {
        label: "Option 4",
        value: "V4"
      },
      {
        label: "Option 5",
        value: "V5"
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
