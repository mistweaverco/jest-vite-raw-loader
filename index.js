const { statSync } = require('fs')
const uuid = require('uuid/v4')
const cache = {}

module.exports = {
  process (content) {
    content = content.replace(/`/g, '\\`').replace(/\$(?=\{.*?\})/g, '\\$')
    return {
      code: `module.exports = \`${content}\``
    }
  },
  getCacheKey (_, filename) {
    const stat = statSync(filename)
    let cached = cache[filename]

    if (!cached) {
      cached = cache[filename] = {
        lastModified: stat.atimeMs,
        hash: uuid()
      }
    }

    if (stat.atimeMs > cached.lastModified) {
      cache[filename] = {
        ...cached,
        lastModified: stat.atimeMs,
        hash: uuid()
      }
    }

    return cached.hash
  }
}
