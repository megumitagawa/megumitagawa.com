/**
 * Create config file for serve package from _redirect
 * This is workaround to avoid 404 of NuxtPicture in production
 * https://github.com/nuxt/image/issues/671#issuecomment-1339418130
 */

import { readFile, writeFile } from 'node:fs/promises'

const content = await readFile('dist/_redirects', 'utf-8')
const nonCommentLineList = content
  .split('\n')
  .filter((line) => !line.startsWith('# '))
  .map((line) => line.split(/\s+/))
const output = { redirects: [] }
for (const [source, destination, type] of nonCommentLineList) {
  if (source && destination) {
    const redirect = { source, destination }
    if (type) redirect.type = parseInt(type, 10)
    output.redirects.push(redirect)
  }
}
await writeFile('dist/serve.json', JSON.stringify(output))
