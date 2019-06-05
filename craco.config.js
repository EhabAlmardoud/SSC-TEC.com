const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: {
            "@primary-color": "#ff4800",
            "@link-color": "#1DA57A",
            "@border-radius-base": "2px"
          },
          javascriptEnabled: true
        }
      }
    }
  ]
};