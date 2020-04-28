<template>
  <div>
    <h1>
      ぽすと
    </h1>

    {{ posts }}

    <SendPost />
  </div>
</template>

<script>
import SendPost from '@/components/SendPost'
import { firestore } from '../plugins/firebase'

export default {
  components: {
    SendPost
  },
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
    const posts = []
    for (let index = 0; index < postData.size; index++) {
      posts.push(postData.docs[index].data())
    }
    return { posts }
  }
}
</script>
