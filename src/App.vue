<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <BaseNav />

    <BaseContent>
      <router-view></router-view>
    </BaseContent>

    <BaseFooter />
    <BaseBottomNav />
  </div>
</template>

<script>
import BaseNav from '@/components/base/BaseNav/BaseNav'
import BaseContent from '@/components/base/BaseContent'
import BaseFooter from '@/components/base/BaseFooter'
import BaseBottomNav from '@/components/base/BaseBottomNav/BaseBottomNav'

export default {
  name: 'app',

  components: {
    BaseNav,
    BaseContent,
    BaseBottomNav,
    BaseFooter,
  },
}
</script>
