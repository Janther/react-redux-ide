// const fs = require("fs");

module.exports = function override(config, env) {
  config.resolve.alias.oniguruma = "onigurumajs";
  config.resolve.extensions.push(".cson");
  config.module.rules[1].oneOf.unshift({
    test: /\.cson$/,
    loader: "cson-loader"
  });

  // fs.writeFile("./config.json", JSON.stringify(config), function(err) {
  //   if (err) throw err;
  //   console.log("complete");
  // });
  return config;
};
