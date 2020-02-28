import winston, { format } from 'winston'
import moment from 'moment-timezone'

const { combine } = format

const getLabel = function (callingModule: any) : string {
  const parts = callingModule.filename.split('/')
  return parts[parts.length - 2] + '/' + parts.pop()
}

function log (callingModule: NodeModule) : winston.Logger {
  const logger: winston.Logger = winston.createLogger({

    format: combine(
      winston.format.timestamp({}),
      winston.format.printf(
        info => `{"timestamp":"${moment(info.timestamp).utc().utcOffset('-0300').format()}","file":"${getLabel(callingModule)}","level":"${info.level}","message":"${info.message}"}`
      )
    ),

    transports: [new winston.transports.Console()]
  })

  return logger
}

export default log
