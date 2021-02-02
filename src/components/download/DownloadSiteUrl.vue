<template>
  <AppDialog v-model="enabled" title="사이트URL">
    <AppDialogBody>
      <AppForm class="tw-mb-0">
        <AppFormInput label="사이트URL" lastChild>
          <input
            type="text"
            v-model="siteUrl"
            placeholder="https://calvinsnax.com/"
          />
        </AppFormInput>
      </AppForm>
    </AppDialogBody>

    <AppDialogActions>
      <AppButton color="gray-blue" @click="$emit('input', false)"
        >취소</AppButton
      >
      <AppButton color="primary" @click="submit">저장</AppButton>
    </AppDialogActions>
  </AppDialog>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    item: {},
    value: {},
  },

  data() {
    return {
      siteUrl: '',
    }
  },

  computed: {
    enabled: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },

  created() {
    this.siteUrl = this.item.siteUrl
  },

  methods: {
    ...mapActions('download', ['updatedSiteUrl']),

    submit() {
      const cartId = this.item._id,
        siteUrl = this.siteUrl
      this.updatedSiteUrl({ cartId, siteUrl })

      this.$emit('input', false)
    },
  },
}
</script>

<style></style>
