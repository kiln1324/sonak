<template>
  <div class="charactor__box" :style="charactorContent[arrayNumber].styleColor">
    <button
      type="button"
      class="btn__close_modal"
      @click="activeToggle"
      :style="charactorContent[arrayNumber].styleBtnColor"
    >
      뒤로가기
    </button>
    <div class="left__page" :class="charactorContent[arrayNumber].img">
      <div class="img_box">
        <img
          :src="
            require(`../../assets/charactorImages/${charactorContent[arrayNumber].img}.png`)
          "
          :alt="charactorContent[arrayNumber].engName"
        />
      </div>
      <div
        class="charactor__left-btns"
        :style="charactorContent[arrayNumber].styleColor"
      >
        <router-link
          to="/"
          class="position"
          v-if="charactorContent[arrayNumber].positionImage"
        >
          <img
            :src="
              require(`../../assets/ico/${charactorContent[arrayNumber].positionImage}.png`)
            "
            :alt="charactorContent[arrayNumber].position"
          />
          <p>{{ charactorContent[arrayNumber].position }}</p>
        </router-link>
        <router-link to="/" class="area_link">
          <img
            :src="
              require(`../../assets/ico/${charactorContent[arrayNumber].positionImage}.png`)
            "
            :alt="charactorContent[arrayNumber].position"
          />
          <p>{{ charactorContent[arrayNumber].link }}</p></router-link
        >
      </div>
    </div>
    <div class="right__page">
      <h2 class="charactor__name">
        <span>{{ charactorContent[arrayNumber].adjective }}</span>
        <strong>{{ charactorContent[arrayNumber].name }}</strong>
        <p>{{ charactorContent[arrayNumber].engName }}</p>
      </h2>
      <div class="charactor__content">
        <p
          class="charactor__des"
          v-for="text in charactorContent[arrayNumber].content"
          :key="text"
          v-html="text"
        ></p>
      </div>
    </div>
    <div class="charactor__bottom">
      <a href=""></a>
    </div>
  </div>
</template>
<script>
import { charactorData } from "@/js/charactorData.js";

export default {
  props: {
    arrayNumber: Number,
  },
  data() {
    return {
      charactorContent: charactorData,
    };
  },
  computed: {
    showHide() {
      return this.$store.state.modalState;
    },
  },
  mounted() {
    setTimeout(function () {
      document
        .querySelector(".charactor__box")
        .setAttribute("class", `charactor__box active`);
    }, 50);
  },
  methods: {
    activeToggle() {
      this.$store.commit("showModal");
      document
        .querySelector(".charactor__box")
        .setAttribute("class", "charactor__box");
    },
  },
};
</script>
<style scoped>
*::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.charactor__box {
  height: 80%;
  width: 70%;
  background-image: none;
  padding: 10px;
  padding-top: 0;
  border: 8px solid var(--border-color);
  border-top: 0;
  border-radius: 30px;
  background-color: var(--bg-color);

  position: relative;
  transition: transform 1s;

  display: flex;
  transform-origin: center;
  transform: rotateY(90deg);

  position: relative;
}
.charactor__box.active {
  transform: rotateY(0deg);
}

/* ===버튼 */
.charactor__box .btn__close_modal {
  width: 14rem;
  padding: 10px 0;
  background-color: var(--btn-color);
  border-radius: 100rem;

  color: #fff;
  font-weight: 700;

  position: absolute;
  left: 3rem;
  top: 2rem;
  z-index: 991;
}

/* ==페이지 */
.charactor__box .left__page,
.charactor__box .right__page {
  width: 50%;
  border: 6px solid #ddd;
  border-top: 0;
  border-radius: 20px;
  padding: 20px;
  background-color: #fff;
  transform: translateY(-8px);
}

.charactor__box .left__page {
  background-repeat: no-repeat;

  box-shadow: inset -10px 0 15px #ddd, 0 8px 0 4px #ddd;
  border-top-right-radius: 0;

  position: relative;
}
.charactor__box .left__page .img_box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.charactor__box .left__page img {
  max-width: 90%;
  max-height: 90%;
}
/* =========캐릭터별 */
.AairanJostina {
  background-position: center 10%;
  background-size: 70%;
  background-image: url(@/assets/charactorImages/AairanJostina_bg.png);
}
.PennyPita {
  background-position: bottom right;
  background-size: 200%;
  background-image: url(@/assets/charactorImages/PennyPita_bg.png);
}
.RuVirtanen {
  background-position: bottom left;
  background-size: 140%;
  background-image: url(@/assets/charactorImages/RuVirtanen_bg.png);
}

/* ================ 버튼들 */
.charactor__left-btns {
  width: 50%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: flex-end;

  position: absolute;
  bottom: 2rem;
  right: 100%;
}

.charactor__left-btns a {
  height: 6rem;
  padding: 1rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  position: relative;
  transition: transform 0.4s;
}
.charactor__left-btns a:hover {
  transform: translateX(0);
}
.charactor__left-btns a p {
  white-space: nowrap;
}
.charactor__left-btns a::before,
.charactor__left-btns a::after {
  content: "";
  display: block;

  border: 15px solid transparent;
  position: absolute;
  right: 99%;
}
.charactor__left-btns a::before {
  top: 0;
}
.charactor__left-btns a::after {
  bottom: 0;
}

/* ====포지션 */
.charactor__left-btns .position {
  background-color: var(--bg-color);
}

.charactor__left-btns .position::before {
  border-top-color: var(--bg-color);
  border-right-color: var(--bg-color);
}
.charactor__left-btns .position::after {
  border-bottom-color: var(--bg-color);
  border-right-color: var(--bg-color);
}
.charactor__left-btns .position img {
  height: 100%;
}

.charactor__left-btns .position p {
  font-size: 1.8rem;
  margin-bottom: 0.2rem;
  line-height: 1;
  color: #fff;
}

/* ==========관련지역 */
.charactor__left-btns .area_link {
  background-color: var(--border-color);
  color: #fff;
}
.charactor__left-btns .area_link::before {
  border-top-color: var(--border-color);
  border-right-color: var(--border-color);
}
.charactor__left-btns .area_link::after {
  border-bottom-color: var(--border-color);
  border-right-color: var(--border-color);
}

.charactor__box .right__page {
  box-shadow: inset 10px 0 15px #ddd, 0 8px 0 4px #ddd;
  border-top-left-radius: 0;
}

/* ====캐릭터별 버튼 */
.AairanJostina .position {
  transform: translateX(4.8rem);
}
.AairanJostina .area_link {
  transform: translateX(12rem);
}

.PennyPita .position {
  transform: translateX(7.8rem);
}
.PennyPita .area_link {
  transform: translateX(9rem);
}
.RuVirtanen .position {
  transform: translateX(7.8rem);
}
.RuVirtanen .position p {
  color: var(--border-color);
}
.RuVirtanen .area_link {
  transform: translateX(12rem);
}
.LiatrisDelAlbens .position {
  transform: translateX(6.3rem);
}
.LiatrisDelAlbens .area_link {
  transform: translateX(10.5rem);
}
.Erdentuya .position {
}
.Erdentuya .area_link {
}
/* ====================본문 */
.charactor__box .right__page {
  padding: 1rem;
}
.charactor__name {
  padding: 2rem 0;
  font-size: 5rem;
  line-height: 1.2;

  position: relative;
}

.charactor__name span {
  display: block;
  font-weight: 400;
  font-size: 3.6rem;
}
.charactor__name p {
  position: absolute;
  right: 0;
  bottom: -2rem;

  font-family: "Great Vibes", cursive;
  font-family: "Ms Madi", cursive;
  opacity: 0.3;
  font-size: 70px;
}

.charactor__content {
  padding: 2rem 0;
  height: 60%;
  max-width: 90%;
  text-align: left;
  margin: 0 auto;
  margin-top: 4rem;
  font-size: 1.8rem;

  overflow-y: auto;
}
.charactor__content::-webkit-scrollbar {
  width: 1rem;
  height: 1rem;
  background-color: #eee;
}
.charactor__content::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 1rem;
}
.charactor__content::selection,
.charactor__content p::selection,
.charactor__content b::selection {
  background-color: var(--bg-color);
  color: #fff;
}
.charactor__content b.heart {
  color: #bf1304;
}

.charactor__bottom .message {
  font-size: 40px;
}
.charactor__bottom .bottom__btns {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  gap: 20px;
}
.charactor__bottom .bottom__btns button {
  font-size: 24px;
  padding: 24px 56px;
  border-radius: 50px;
  background-color: #008b7d;
  color: #fff;
  font-weight: 700;
}
</style>
