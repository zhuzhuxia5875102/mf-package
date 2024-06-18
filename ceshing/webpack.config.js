const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "ceshing",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        // For remotes (please adjust)
        // name: "ceshing",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './/src/app/app.component.ts',
        // },

        // For hosts (please adjust)
        // remotes: {
        //     "mfe1": "http://localhost:3000/remoteEntry.js",

        // },

        shared: share({
          // "@angular/core": { singleton: false, strictVersion: false, requiredVersion: 'auto' },
          // "@angular/common": { singleton: false, strictVersion: false, requiredVersion: 'auto' },
          // "@angular/common/http": { singleton: false, strictVersion: false, requiredVersion: 'auto' },
          // "@angular/router": { singleton: false, strictVersion: false, requiredVersion: 'auto' },

          "@angular/core": {requiredVersion: 'auto' },
          "@angular/common": {requiredVersion: 'auto' },
          "@angular/common/http": {requiredVersion: 'auto' },
          "@angular/router": {requiredVersion: 'auto' },

          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
  ],
};
