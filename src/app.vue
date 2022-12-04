<template>
  <Html lang="ja">
    <Head>
      <Title>megumitagawa.com</Title>
      <Meta v-if="metaRobotsNone" name="robots" content="noindex,nofollow" />
      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin="anonymous"
      />
      <Link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@500&family=Quicksand:wght@600&display=swap"
        media="print"
        onload="this.media='all'"
      />
      <Link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>
    <Body>
      <div />
    </Body>
  </Html>
</template>

<script setup lang="ts">
const { metaRobotsNone } = useRuntimeConfig()
</script>
