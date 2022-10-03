<template>
  <section class="sections about">
    <h2 class="section_title">소낙</h2>
    <article class="about_content">내용</article>
  </section>
</template>

<script>
export default {
  name: "sectionComponent",
  data() {
    return {};
  },

  methods: {
    sendNumber() {
      this.$store.commit("showModal");
    },
  },
};
</script>

<style scope>
.about {
  background: url(@/assets/about/floor.jpg) repeat-x bottom/50%;
}
.about_content {
  height: 80vh;
}
</style>
