import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { projects, ProjectProps } from '@/data'

@Module({ name: 'projects', stateFactory: true, namespaced: true })
export default class Projects extends VuexModule {
  private projects = [] as ProjectProps[]
  private project = {} as ProjectProps

  public get $single() {
    return this.project
  }

  public get $all() {
    return this.projects
  }

  @Mutation
  private SET_SINGLE(data: ProjectProps) {
    this.project = data
  }

  @Mutation
  private SET_ALL(data: ProjectProps[]) {
    this.projects = data
  }

  @Action
  public index(query: string) {
    let filterProjects = projects

    if (query) {
      filterProjects = projects.filter((project) => {
        return project.projectName
          .toLocaleLowerCase()
          .includes(query.toLocaleLowerCase())
      })
    }

    this.context.commit('SET_ALL', filterProjects)
  }

  @Action
  public create(data: ProjectProps) {
    this.context.commit('SET_SINGLE', data)
  }

  @Action
  public update(data: ProjectProps) {
    this.context.commit('SET_SINGLE', data)
  }

  @Action
  public destroy(id: number) {
    console.log(id)
    this.context.commit('SET_SINGLE', null)
  }
}
