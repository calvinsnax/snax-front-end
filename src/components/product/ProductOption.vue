<template>
  <div class="tw-pt-5">
    <AppForm>
      <AppFormInput label="라이센스를 선택하세요." last-child :overflow="false">
        <app-select
          v-model="getSetLicense"
          placeholder="라이센스 선택"
          style="width: 100%"
        >
          <app-option
            v-for="item in licenseList"
            :key="item.id"
            :value="item.id"
            :label="item.name"
          >
            <div :class="$style.licenseItem">
              <div :class="$style.title">{{ item.name }}</div>
              <div :class="$style.price">
                {{ getTotalAmount(item.id) | currency('', 0) }}원
              </div>
            </div>
          </app-option>
        </app-select>
      </AppFormInput>
    </AppForm>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState('product', ['product', 'license']),
    ...mapGetters('product', ['getTotalAmount']),

    getSetLicense: {
      get() {
        return this.license
      },
      set(val) {
        this.setLicense(val)
      },
    },

    licenseList() {
      return [
        {
          id: 'basic',
          name: '베이직 라이센스',
          percent: this.product.licenses.basic,
        },
        {
          id: 'premium',
          name: '프리미엄 라이센스',
          percent: this.product.licenses.premium,
        },
        {
          id: 'business',
          name: '비즈니스 라이센스',
          percent: this.product.licenses.business,
        },
      ]
    },
  },

  methods: {
    ...mapMutations('product', ['setLicense']),
  },
}
</script>

<style lang="scss" module scoped>
.licenseItem {
  width: 100%;
  .title {
    font-weight: bold;
    margin-bottom: 0.25rem;
  }
  .price {
    color: black;
    font-weight: $font-weight-regular;
  }
}
</style>
