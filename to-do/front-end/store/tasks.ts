import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

import { TasksProps, tasks } from '@/data'

@Module({ name: 'tasks', stateFactory: true, namespaced: true })
export default class Tasks extends VuexModule {
  private tasks = [] as TasksProps[]
  private task = {} as TasksProps

  public get $all() {
    return this.tasks
  }

  public get $single() {
    return this.task
  }

  @Mutation
  private SET_ALL(data: TasksProps[]) {
    this.tasks = data
  }

  @Mutation
  private SET_SINGLE(data: TasksProps) {
    this.task = data
  }

  @Action
  public index(projectId: string) {
    // eslint-disable-next-line array-callback-return
    const filtertasks = tasks.filter((task) => {
      if (task.projectId === Number(projectId)) {
        return task
      }
    })

    this.context.commit('SET_ALL', filtertasks)
  }

  @Action
  public create(payload: TasksProps) {
    this.context.commit('SET_SINGLE', payload)
  }

  @Action
  public update(payload: TasksProps) {
    this.context.commit('SET_SINGLE', payload)
  }

  @Action
  public destroy(id: number) {
    console.log(id)

    this.context.commit('SET_SINGLE', null)
  }
}
