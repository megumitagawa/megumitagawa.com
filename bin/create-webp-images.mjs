/**
 * Create WebP format image files from legacy format image files
 * in output directory
 */

import { globby } from 'globby'
import sharp from 'sharp'

// eslint-disable-next-line no-console
console.log('create-webp-images.mjs:')

const legacyImagePathList = await globby('dist/**/*.{gif,jpg,jpeg,png}')
for (const legacyImagePath of legacyImagePathList) {
  const webpImagePath = legacyImagePath.replace(
    /\.(gif|jpg|jpeg|png)$/i,
    '.webp'
  )
  sharp(legacyImagePath)
    .toFormat('webp', { quality: 100 })
    .toFile(webpImagePath)
  // eslint-disable-next-line no-console
  console.log(`  Created ${webpImagePath}`)
}
