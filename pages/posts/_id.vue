<template>
  <div class="container mx-auto px-4">
    <article>
      <h1 class="title">{{ post.title }}</h1>
      <p>
        {{ post.content }}
      </p>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      posts: [
        {
          id: "balut",
          title: "What is Balut ?",
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequunturest culpa illo reiciendis. Asperiores eius officiis amet nemo voluptatum deserunt a quidem, officia exercitationem, adipisci voluptatem reiciendis, aliquid fuga! Non."
        },
        {
          id: "whereIsIt",
          title: "What is Basefamsenfa ?",
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequunturest culpa illo reiciendis. Asperiores eius officiis amet nemo voluptatum deserunt a quidem, officia exercitationem, adipisci voluptatem reiciendis, aliquid fuga! Non."
        },
        {
          id: "how",
          title: "What is Bapueef ?",
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequunturest culpa illo reiciendis. Asperiores eius officiis amet nemo voluptatum deserunt a quidem, officia exercitationem, adipisci voluptatem reiciendis, aliquid fuga! Non."
        }
      ]
    };
  },
  computed: {
    post() {
      return this.posts.find(post => post.id === this.id);
    }
  }
};
</script>
