<template>
  <router-link
    :class="$style.item"
    :to="{
      name: 'product',
      params: {
        id: itemId,
      },
    }"
  >
    <div :class="$style.thumbnail">
      <img :src="src" alt="" />
    </div>

    <div :class="[$style.itemBody, nonePadding && $style.nonePadding]">
      <div :class="$style.title">{{ title }}</div>
      <div :class="$style.desc">{{ desc }}</div>
      <div :class="$style.price">
        {{
          price
            | currency('원', 0, {
              symbolOnLeft: false,
            })
        }}
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    itemId: String,
    title: String,
    desc: String,
    price: Number,
    discountPrice: Number,
    src: String,
    nonePadding: [Boolean, String],
  },
}
</script>

<style lang="scss" module scoped>
.item {
  display: flex;
  align-items: center;

  .thumbnail {
    position: relative;
    width: 3.75rem;
    height: 3.75rem;
    margin-right: 1rem;
    overflow: hidden;
    border-radius: $border-radius-2;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: cover;
    }
  }

  .itemBody {
    flex: 1;
    height: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid $color-gray-200;

    overflow: hidden;

    &.nonePadding {
      padding-top: 0;
      padding-bottom: 0;
    }
  }

  &:last-child .itemBody {
    border-bottom: none;
  }
}

.title {
  font-size: 0.875rem;
  font-weight: $font-weight-bold;
}
.desc {
  max-width: 100%;
  font-size: 0.875rem;
  color: rgba(black, 0.5);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.price {
  color: $color-primary;
  font-size: 0.875rem;
  font-weight: $font-weight-bold;
}
</style>
