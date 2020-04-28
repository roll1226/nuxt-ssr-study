<template>
  <div>
    <input v-model="title" type="text" placeholder="たいとる" />
    <input v-model="body" type="text" placeholder="ぼでぃ" />
    <button @click="send">
      送る
    </button>
  </div>
</template>

<script>
import { firestore } from '../plugins/firebase'

export default {
  data() {
    return {
      title: '',
      body: ''
    }
  },
  methods: {
    async send() {
      await firestore
        .collection('posts')
        .add({
          title: this.title,
          body: this.body
        })
        .then(() => {
          this.title = ''
          this.body = ''
        })
    }
  }
}
</script>
