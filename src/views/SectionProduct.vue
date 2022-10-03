<template>
  <section class="sections product">
    <h2 class="section_title">프로덕트</h2>
    <ul class="book_shelf">
      <li class="line">
        <ul class="line__item">
          <li class="book_box normal"></li>
          <li class="book_box mini before"></li>
          <li class="book_box charactor">
            <router-link to="/gaiac" @click="sendNumber">
              <h3 class="box_title">아이란 존스티나</h3>
              <p class="first_shelf"></p>
            </router-link>
          </li>
          <li class="book_box middle after"></li>
          <li class="book_box mini"></li>
        </ul>
      </li>
      <li class="line">
        <ul class="line__item">
          <li class="book_box charactor">
            <router-link to="/narrabillis" @click="sendNumber">
              <h3 class="box_title">페니 피타</h3>
              <p class="first_shelf"></p>
              <p class="second_shelf"></p>
              <p class="third_shelf"></p>
            </router-link>
          </li>
          <li class="book_box normal before after"></li>
          <li class="book_box charactor">
            <router-link to="/narrabillis" @click="sendNumber">
              <h3 class="box_title">루 비크리</h3>
              <p class="first_shelf"></p>
              <p class="second_shelf"></p>
              <p class="third_shelf"></p>
            </router-link>
          </li>
        </ul>
      </li>
      <li class="line">
        <ul class="line__item">
          <li class="book_box middle before"></li>
          <li class="book_box charactor">
            <router-link to="/datum" @click="sendNumber">
              <h3 class="box_title">리아 델 엘반스</h3>
              <p class="first_shelf"></p>
              <p class="second_shelf"></p>
            </router-link>
          </li>
          <li class="book_box mini after"></li>
          <li class="book_box normal"></li>
          <li class="book_box normal"></li>
        </ul>
      </li>
      <li class="line">
        <ul class="line__item">
          <li class="book_box mini"></li>
          <li class="book_box middle before"></li>
          <li class="book_box charactor">
            <router-link to="/last-continent" @click="sendNumber">
              <h3 class="box_title">에르덴투야</h3>
              <p class="first_shelf"></p>
              <p class="second_shelf"></p>
            </router-link>
          </li>
          <li class="book_box normal after"></li>
          <li class="book_box mini"></li>
        </ul>
      </li>
    </ul>
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

<style scope></style>
