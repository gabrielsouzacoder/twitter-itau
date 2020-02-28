import axios from 'axios'

const getToken = async () => {
  const response = await axios({
    baseURL: 'https://api.twitter.com',
    method: 'post',
    url: '/oauth2/token',
    params: {
      // eslint-disable-next-line @typescript-eslint/camelcase
      grant_type: 'client_credentials'
    },
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    auth: {
      username: 'XtLMb92g0cPHz0KtT5nVbu4z7',
      password: 'L5KoKtPyT9FqAMJihFE89z0GjoUK4roVaVlQqRfCMKw9zk6bYZ'
    }
  })

  return `Bearer ${response.data.access_token}`
}

export default getToken
