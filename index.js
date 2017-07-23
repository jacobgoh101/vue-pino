const pino = require("pino")();

const MyPlugin = {
  install(Vue, options) {
    Vue.prototype.pino = pino;
    Vue.pino = pino;
  }
};

exports = MyPlugin;
