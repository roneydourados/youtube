<template>
  <ProjectList />
</template>

<script lang="ts">
import Vue from 'vue'

import { projects } from '@/store'

export default Vue.extend({
  asyncData({ error }) {
    try {
      projects.index('')
    } catch {
      return error({ statusCode: 404 })
    }
  },
})
</script>
