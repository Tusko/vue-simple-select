<template>
  <div v-if="checkOptions" class="vue-select" :style="'width:' + width + 'px'">
    <select :id="id" :name="name" @change="onChange">
      <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
    </select>
    <i class="select--icon" />
  </div>
</template>

<style lang="scss" scoped>
.vue-select {
  border-bottom: 1px solid #ccc;
  display: inline-block;
  font-family: inherit;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 160px;
  select {
    -webkit-appearance: none;
    background: transparent;
    background-image: none;
    padding: 5px 8px 5px 0;
    box-shadow: none;
    font-size: 15px;
    width: 130%;
    border: 0;
    &:focus {
      outline: none;
    }
  }
  .select--icon {
    border-color: #333 transparent transparent transparent;
    border-width: 6px 5px 0 5px;
    transition: opacity 0.5s;
    border-style: solid;
    position: absolute;
    opacity: 0.5;
    right: 5px;
    top: 10px;
    height: 0;
    width: 0;
  }
  &:hover {
    .select--icon {
      opacity: 1;
    }
  }
}
</style>

<script>
export default {
  name: "Vue2Select",
  props: {
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: "select"
    },
    width: {
      type: Number,
      default: null
    },
    options: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  computed: {
    checkOptions() {
      if (this.options.length) {
        return this.options;
      } else {
        window.console.error(this.name + " couldn't render without options");
      }
    }
  },
  methods: {
    onChange(selected) {
      this.$emit("vueSelectChanged", {
        value: selected.target.value,
        id: selected.target.id
      });

      // action to use v-model
      this.$emit("input", selected.target.id);
    }
  }
};
</script>
