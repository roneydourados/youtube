<template>
  <v-card flat class="pa-6" width="900" color="transparent">
    <v-card-title>Tarefas, {{ project.projectName }}</v-card-title>
    <v-card-actions>
      <v-btn text color="red" @click="goBack">
        <v-icon>mdi-arrow-left-top</v-icon>
        Voltar
      </v-btn>
      <v-spacer />
      <v-btn text color="success" @click="newTask">
        <v-icon>mdi-plus</v-icon>
        Nova tarefa
      </v-btn>
    </v-card-actions>

    <v-card-tex>
      <v-timeline dense clipped>
        <v-timeline-item
          v-for="(task, index) in $tasks"
          :key="index"
          :color="task.concluded ? 'success' : 'primary'"
          :icon="
            task.concluded ? 'mdi-checkbox-marked-circle-outline' : 'mdi-alarm'
          "
          fill-dot
        >
          <v-card color="transparent">
            <v-card-title>
              <span>
                {{ task.title }}
              </span>
              <v-spacer />
              <v-btn
                v-if="!task.concluded"
                icon
                color="deep-purple"
                @click="editTask(task)"
              >
                <v-icon>mdi-pencil-outline</v-icon>
              </v-btn>
              <v-btn
                v-if="!task.concluded"
                icon
                color="red"
                @click="deleteTask(task)"
              >
                <v-icon>mdi-delete-outline</v-icon>
              </v-btn>
              <v-switch
                :value="task.concluded"
                class="ml-8"
                @change="closeOpenTask(!task.concluded)"
              />
            </v-card-title>
            <v-card-text>
              <p>
                {{ task.content }}
              </p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-card-tex>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

import { tasks } from '@/store'
import { TasksProps, ProjectProps } from '@/data'

export default Vue.extend({
  props: {
    project: { type: Object, required: true } as PropOptions<ProjectProps>,
  },

  data: () => ({
    dialogNew: false,
    dialogEdit: false,
    dialogDelete: false,
    taskEdit: {} as TasksProps,
  }),

  computed: {
    $tasks() {
      return tasks.$all
    },
  },

  methods: {
    goBack() {
      this.$router.back()
    },

    newTask() {
      this.dialogNew = true
    },

    editTask(task: TasksProps) {
      this.taskEdit = Object.assign({}, task)
      this.dialogEdit = true
    },

    deleteTask(task: TasksProps) {
      this.taskEdit = Object.assign({}, task)
      this.dialogDelete = true
    },

    closeOpenTask(taskState: boolean) {
      console.log(
        '🚀 ~ file: TasksList.vue ~ line 106 ~ closeOpenTask ~ taskState',
        taskState
      )
    },
  },
})
</script>
