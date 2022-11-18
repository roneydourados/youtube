import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HelloWorldController {
  public async index({}: HttpContextContract) {
    return {
      mensagem: 'Olá bem vindo ao adonisJS',
    }
  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
