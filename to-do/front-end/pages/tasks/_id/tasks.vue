<template>
  <TasksList :project="$project" />
</template>

<script lang="ts">
import Vue from 'vue'

import { projects, tasks } from '@/store'

export default Vue.extend({
  asyncData({ error, route }) {
    try {
      const id = route.params.id as string

      tasks.index(id)
      console.log(tasks.$all)
    } catch {
      return error({ statusCode: 404 })
    }
  },

  computed: {
    $project() {
      return projects.$single
    },
  },
})
</script>
