class HttpException extends Error {
  status: number
  message: string
  level: string

  constructor (status: number, message: string, level: string) {
    super(message)
    this.status = status
    this.message = message
    this.level = level
  }
}

export default HttpException
