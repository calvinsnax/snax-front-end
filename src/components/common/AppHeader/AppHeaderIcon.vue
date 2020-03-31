<template>
  <a :class="$style.icon" @click="$emit('click', $event)">
    <slot />
  </a>
</template>

<script>
export default {}
</script>

<style lang="scss" module scoped>
.icon {
  user-select: none;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  color: $oc-gray-5;
  border-radius: 100%;
  text-decoration: none;

  i {
    color: $oc-gray-9;
    font-size: 1.2rem;
  }
}
</style>
