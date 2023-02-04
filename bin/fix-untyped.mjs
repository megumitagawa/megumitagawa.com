/**
 * Override untyped package to output the `2xl` key for Tailwind theme
 * in quotes on .nuxt/types/schema.d.ts
 * When untyped is fixed, remove this file
 */

import { readFile, writeFile } from 'node:fs/promises'
import { globby } from 'globby'

// eslint-disable-next-line no-console
console.log('fix-untyped.mjs:')

const pathList = await globby('node_modules/untyped/dist/shared/*')
for (const path of pathList) {
  const content = await readFile(path, 'utf-8')
  const newContent = content.replace(
    '^\\w+$',
    '^\\d*\\.?\\d+$|^\\d+\\.?\\d*$|^[a-zA-Z_\\$][\\w\\$]*$'
  )
  await writeFile(path, newContent)
  // eslint-disable-next-line no-console
  console.log(`  Fixed ${path}`)
}
