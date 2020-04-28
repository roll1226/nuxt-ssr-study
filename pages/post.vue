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
  // data() {
  //   return {
  //     posts: []
  //   }
  // },

  // async created() {
  //   const post = await firestore.collection('posts').get()

  //   this.posts.push(post.docs[0].data())
  // }
  async asyncData() {
    const postData = await firestore.collection('posts').get()
    const posts = postData.docs[0].data()
    return { posts }
  }
}
</script>
