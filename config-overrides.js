module.exports = function override(config, env) {
  config.resolve.alias.oniguruma = "onigurumajs";
  return config;
};
