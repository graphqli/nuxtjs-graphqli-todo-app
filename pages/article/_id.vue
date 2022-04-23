<template>
  <div v-if="task">
    <div v-for="item in article" :key="item.id">
      <h3>{{ item.title }}</h3>
      <p>{{ item.content }}</p>
      <p>
        <nuxt-link to="/">
          Home page
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
import task from '~/apollo/queries/fetchTask'

export default {
  apollo: {
    article: {
      query: task,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    }
  },
  head() {
    return {
      title: 'Get a Single Task'
    }
  }
}
</script>

