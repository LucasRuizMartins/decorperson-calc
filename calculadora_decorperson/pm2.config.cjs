module.exports = {
  name: 'calculadora',
  script: 'http-server',
  args: ['dist', '-p', '8080', '-a', '0.0.0.0', '--history-index', 'index.html'],
  instances: 1,
  autorestart: true,
  watch: false,
  max_memory_restart: '1G',
  env: {
    NODE_ENV: 'production',
  },
};
