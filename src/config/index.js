import Constants from 'expo-constants'

export const prodUrl = 'http://34.87.165.18:5000' // real server 'http://34.87.165.18:5000'

const ENV = {
  dev: {
    apiUrl: prodUrl
  },
  staging: {
    apiUrl: prodUrl
  },
  prod: {
    apiUrl: prodUrl
  }
}

function getEnvVars(env = '') {
  if (env === null || env === undefined || env === '') return ENV.dev
  if (env.indexOf('dev') !== -1) return ENV.dev
  if (env.indexOf('staging') !== -1) return ENV.staging
  if (env.indexOf('prod') !== -1) return ENV.prod
}

export default getEnvVars(Constants.manifest.releaseChannel)
