<template>
  <div :class="$style.item">
    <div :class="$style.thumbnail">
      <router-link
        :to="{ name: 'product', params: { id: item.id } }"
        :class="$style.thumbnailInner"
      >
        <img :src="item.thumbnail" :alt="item.name" />
      </router-link>

      <!-- <div :class="$style.cartCover">
        <router-link
          :to="{ name: 'product', params: { id: item.id } }"
          :class="$style.cartCoverLink"
        ></router-link>

        <button :class="$style.cartButton">
          <AppIcon name="icons/shopping_cart" />
          <span>담기</span>
        </button>
      </div> -->
    </div>

    <router-link
      :to="{ name: 'product', params: { id: item.id } }"
      :class="$style.itemBody"
    >
      <div :class="$style.category">{{ item.category }}</div>
      <div :class="$style.name">{{ item.name }}</div>
      <div :class="$style.description">{{ item.description }}</div>

      <div>
        <span
          v-if="item.discountPrice && item.discountPrice !== item.price"
          :class="$style.discountPrice"
        >
          {{
            item.price
              | currency('원', 0, {
                symbolOnLeft: false,
              })
          }}
        </span>
        <span :class="$style.price">
          {{
            (item.price - item.discountPrice)
              | currency('원', 0, {
                symbolOnLeft: false,
              })
          }}
        </span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    item: {},
  },
}
</script>

<style lang="scss" module scoped>
.item {
  cursor: pointer;
  position: relative;
  padding: 1.5rem;
  border-radius: $border-radius-3;
  background-color: $color-gray-200;

  .thumbnail {
    position: relative;
    width: 100%;
    border-radius: $border-radius-3;
    overflow: hidden;

    & > a {
      display: block;
    }
  }
}

.itemBody {
  cursor: pointer;
  display: block;
  padding-top: 1.5rem;
}
.category {
  color: $color-gray-600;
  font-size: 0.75rem;
}
.name {
  font-size: 1.5rem;
  font-weight: $font-weight-bold;
}
.description {
  max-width: 100%;
  font-size: 0.875rem;
  color: rgba(black, 0.5);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.discountPrice {
  color: $color-gray-600;
  font-size: 0.75rem;
  text-decoration: line-through;
}
.price {
  color: $color-primary;
  font-size: 0.875rem;
  font-weight: $font-weight-bold;
}

.cartCover {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;

  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: rgba(black, 0.6);

  opacity: 0;
  transition: 0.5s;

  .cartCoverLink {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
.cartButton {
  display: inline-flex;
  align-items: center;
  padding: 0.375rem 0.75rem;

  color: black;
  font-size: 0.875rem;
  font-weight: $font-weight-medium;
  text-decoration: none;

  outline: none;
  border: none;

  background-color: rgba(white, 0.9);
  border-radius: $border-radius-1;
  transition: 0.3s;

  svg {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: rgba(white, 0.8);
  }
}
</style>
