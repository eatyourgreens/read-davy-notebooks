const esbuild = require('esbuild')
const { NODE_ENV = 'production' } = process.env

const isProduction = NODE_ENV === 'production'

module.exports = class {
  data() {
    return {
      permalink: false,
      eleventyExcludeFromCollections: true,
    }
  }

  async render() {
    await esbuild.build({
      entryPoints: ['scripts/subject.js'],
      bundle: true,
      minify: false,
      outdir: 'dist/js',
      sourcemap: !isProduction,
      target: isProduction ? 'es6' : 'esnext',
    })
  }
}