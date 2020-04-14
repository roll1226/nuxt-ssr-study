<template>
  <div>
    {{ test }}
  </div>
</template>

<script>
export default {
  asyncData() {
    const test = 'めたてすと'
    return { test }
  },
  head() {
    return {
      title: 'Top',
      meta: [
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:title', property: 'og:title', content: 'SSR Sample' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Top Top Top'
        },
        { hid: 'og:image', property: 'og:image', content: this.image }
      ]
    }
  }
}
</script>
