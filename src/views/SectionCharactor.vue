<template>
  <section class="sections charactor">
    <h2 class="section_title">주인공</h2>
    <ul class="book_shelf">
      <li class="line">
        <div class="ico_box heart">
          <img src="@/assets/ico/ico_heart-w.png" alt="하트" />
        </div>
        <ul class="line__item">
          <li class="book_box normal"></li>
          <li class="book_box mini before"></li>
          <li class="book_box charactor">
            <router-link to="/AairanJostina" @click="ShowModal">
              <h3 class="box_title">아이란 존스티나</h3>
              <p class="first_shelf"></p>
            </router-link>
          </li>
          <li class="book_box middle after"></li>
          <li class="book_box mini"></li>
        </ul>
      </li>
      <li class="line">
        <div class="ico_box spade">
          <img src="@/assets/ico/ico_spade-w.png" alt="스페이드" />
        </div>
        <ul class="line__item">
          <li class="book_box charactor">
            <router-link to="/PennyPita" @click="ShowModal">
              <h3 class="box_title">페니 피타</h3>
              <p class="first_shelf"></p>
              <p class="second_shelf"></p>
              <p class="third_shelf"></p>
            </router-link>
          </li>
          <li class="book_box normal before after"></li>
          <li class="book_box charactor">
            <router-link to="/RuVirtanen" @click="ShowModal">
              <h3 class="box_title">루 비르타넨</h3>
              <p class="first_shelf"></p>
              <p class="second_shelf"></p>
              <p class="third_shelf"></p>
            </router-link>
          </li>
        </ul>
      </li>
      <li class="line">
        <div class="ico_box diamond">
          <img src="@/assets/ico/ico_diamond-w.png" alt="다이아" />
        </div>
        <ul class="line__item">
          <li class="book_box middle before"></li>
          <li class="book_box charactor">
            <router-link to="/LiatrisDelAlbens" @click="ShowModal">
              <h3 class="box_title">리아 델 엘반스</h3>
              <p class="first_shelf"></p>
              <p class="second_shelf"></p>
            </router-link>
          </li>
          <li class="book_box normal after"></li>
          <li class="book_box mini"></li>
          <li class="book_box normal"></li>
        </ul>
      </li>
      <li class="line">
        <div class="ico_box clover">
          <img src="@/assets/ico/ico_clover-w.png" alt="클로버" />
        </div>
        <ul class="line__item">
          <li class="book_box mini"></li>
          <li class="book_box middle before"></li>
          <li class="book_box charactor">
            <router-link to="/last-continent" @click="ShowModal">
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
    ShowModal() {
      this.$store.commit("showModal");
    },
  },
};
</script>

<style scope>
.charactor {
  flex-grow: 1;
}
.charactor .book_shelf {
  margin-top: 10rem;
}
.charactor .book_shelf .line {
  position: relative;
}
.ico_box {
  position: absolute;
  bottom: 100%;
  left: 0;
  width: 100%;
  height: 8rem;
  border-radius: 6rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: 1rem;
  padding-bottom: 0;
  background-color: #443435;
  /* background-color: #fff; */
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.ico_box::after {
  content: "";
  display: block;
  width: 90%;
  height: 7rem;
  border: 2px solid #fff;
  border-radius: 5rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
}
.ico_box img {
  height: 90%;
}
.ico_box.heart img {
  transform: scale(1.1);
}
.ico_box.diamond img {
  transform: scale(0.95);
}
</style>
