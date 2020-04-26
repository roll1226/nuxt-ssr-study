<template>
  <div>
    <h1>
      ぽすと
    </h1>

    {{ posts }}
  </div>
</template>

<script>
import { firestore } from '../plugins/firebase'
export default {
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    this.$nextTick(async () => {
      const post = await firestore.collection('posts').get()

      this.posts.push(post.docs[0].data())
    })
  }
}
</script>
