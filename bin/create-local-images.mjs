/**
 * Request images that is not hosted in this repository
 * and create files to output directory
 */

import { readFile } from 'node:fs/promises'
import { outputFile } from 'fs-extra/esm'
import { globby } from 'globby'

// eslint-disable-next-line no-console
console.log('create-local-images.mjs:')

// Correct images that is not hosted in this repository
const htmlPathList = await globby('.output/public/**/*.html')
const nonUniqueRemoteImageSrcList = []
for (const htmlPath of htmlPathList) {
  const content = await readFile(htmlPath, 'utf-8')
  const imageSrcList = content.match(/(?<=(src|srcset)=").*?(?=")/g) ?? []
  const remoteImageSrcList = imageSrcList.filter((imageUrl) =>
    /^(?!\/img\/).*?\.(gif|jpg|jpeg|png|webp)/.test(imageUrl)
  )
  nonUniqueRemoteImageSrcList.push(...remoteImageSrcList)
}
const uniqueRemoteImageSrcList = Array.from(
  new Set(nonUniqueRemoteImageSrcList)
)

// Request and create image files
const promises = uniqueRemoteImageSrcList.map((remoteImageSrc) => {
  const remoteImagePath = `.output/public${remoteImageSrc}`
  const remoteImageUrl = `https:/${remoteImageSrc}`
  return (
    fetch(remoteImageUrl)
      .then((response) => {
        if (response.status !== 200)
          throw new Error(`${response.status} ${response.statusText}`)
        return response.arrayBuffer()
      })
      .then((arrayBuffer) =>
        outputFile(remoteImagePath, Buffer.from(arrayBuffer))
      )
      // eslint-disable-next-line no-console
      .then(() => console.log(`  Created ${remoteImagePath}`))
      // eslint-disable-next-line no-console
      .catch((error) => console.log(`  ${error.message} ${remoteImageUrl}`))
  )
})
await Promise.allSettled(promises)
