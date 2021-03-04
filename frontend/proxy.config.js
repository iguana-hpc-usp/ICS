const PROXY_CONFIG = [
  {
    context: '/api/*',
    target: 'http://192.168.0.158:8000',
    secure: false,
    logLevel: 'debug',
    //pathRewrite: {'^/api' : ''}
  }
];

module.exports = PROXY_CONFIG;

