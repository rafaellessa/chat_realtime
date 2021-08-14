
import { Request, Response } from 'express'
import { MessageService } from '../services/MessageService'
class MessageController {

  async create(request: Request, response: Response): Promise<Response> {
    try {

      const { message } = request.body
      const messageService = new MessageService()
      const result = messageService.create(message)

      return response.status(201).send({
        success: true,
        data: result
      })

    } catch (error) {
      return response.status(400).send({
        error: true,
        message: error.message
      })
    }
  }

}

export { MessageController }