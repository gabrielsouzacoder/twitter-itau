import app from './app'
import logger from './utils/logger'

const log = logger(module)

app.listen(3333, () => {
  log.info('Aplicação iniciada com sucesso.')
})
