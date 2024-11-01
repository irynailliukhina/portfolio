<template>
  <a :href="link.route" :class="{ 'text-gradient': isHovered }" @mouseover="isHovered = true"
    @mouseleave="isHovered = false">
    {{ link.text }}</a>
</template>

<script>
export default {
  data() {
    return {
      isHovered: false
    }
  },
  props: {
    link: Object
  },
  methods: {

  },
  computed: {
  }
}
</script>

<style scoped>
a {
  text-transform: uppercase;
}
</style>
