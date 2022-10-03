<template>
  <div
    class="world__box"
    :id="worldContent[arrayNumber].img"
    :style="worldContent[arrayNumber].styleBtnColor"
  >
    <button type="button" class="btn__close_modal" @click="activeToggle">
      뒤로가기
    </button>
    <h2 class="world__name">
      <span>{{ worldContent[arrayNumber].adjective }}</span>
      <strong>{{ worldContent[arrayNumber].name }}</strong>
    </h2>
    <div class="world__content">
      <div class="world__img">
        <img
          :src="
            require(`../../assets/worldImages/${worldContent[arrayNumber].img}.jpg`)
          "
          :alt="worldContent[arrayNumber].name"
        />
      </div>
      <div class="world__text">
        <h3 class="world__title">{{ worldContent[arrayNumber].title }}</h3>
        <div class="world__des--wrap">
          <p
            class="world__des"
            v-for="text in worldContent[arrayNumber].content"
            :key="text"
            v-html="text"
          ></p>
        </div>
      </div>
    </div>
    <div class="world__area" v-show="worldContent[arrayNumber].area">
      <ul class="area_list">
        <li
          class="area_item"
          v-for="area in worldContent[arrayNumber].areaList"
          :key="area"
        >
          <a href="#">
            <div class="img-box">
              <img :src="require(`../../assets/worldImages/${area.img}.jpg`)" />
            </div>
            <h5 class="area__name">{{ area.name }}</h5>
            <p class="area__eng-name">{{ area.engName }}</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="world__bottom" v-show="!worldContent[arrayNumber].area">
      <h4 class="message">
        자세한 이야기는 게임이<br />업데이트되면서 추후 공개됩니다!
      </h4>
      <div class="bottom__btns">
        <button type="button">캐릭터소개 보러가기</button>
        <button type="button" @click="activeToggle">다른 대륙 둘러보기</button>
      </div>
    </div>
  </div>
</template>
<script>
import { worldData } from "@/js/worldData.js";

export default {
  props: {
    arrayNumber: Number,
  },
  data() {
    return {
      worldContent: worldData,
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
        .querySelector(".world__box")
        .setAttribute("class", "world__box active");
    }, 50);
  },
  methods: {
    activeToggle() {
      this.$store.commit("showModal");
      document
        .querySelector(".charactor__box")
        .setAttribute("class", "charactor__box");
    },
    areaImgName(item) {
      return require(`../../assets/worldImages/${item}.jpg`);
    },
  },
};
</script>
<style scope>
*::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.world__box {
  height: 0%;
  width: 80%;
  background: url(@/assets/bg_rasul.png) center;
  padding: 120px 60px;
  overflow: hidden;

  position: relative;
  transition: height 1s;
}
.world__box.active {
  height: 90%;
  overflow: auto;
}

#world_narrabillis {
  background: no-repeat center/cover;
  background-image: url(@/assets/worldImages/bg_narrabillis.png);
}
#world_last {
  background: no-repeat center/100% 104%;
  background-image: url(@/assets/worldImages/bg_last.jpg);
  color: #252525;
  background-attachment: local;
}

/* =====버튼 */
.world__box .btn__close_modal {
  width: 14rem;
  padding: 10px 0;
  background-color: var(--btn-color);
  border-radius: 100rem;

  color: #fff;
  font-weight: 700;

  position: absolute;
  left: 4rem;
  top: 3rem;
}

/* ==========이름 */

.world__name {
  font-size: 8rem;

  position: relative;
}
.world__name::before,
.world__name::after {
  content: "";
  display: block;
  position: absolute;
  background: no-repeat center/contain;
}

.world__name span {
  display: block;
  font-size: 4rem;
  font-weight: 400;
  line-height: 1;
}
.world__name strong {
  letter-spacing: 10px;
}

#world_last .world__name::before {
  width: 20rem;
  height: 20rem;
  background-image: url(@/assets/worldImages/톱니01.png);

  top: -6rem;
  left: 20%;
}
#world_last .world__name::after {
  width: 16rem;
  height: 16rem;
  background-image: url(@/assets/worldImages/톱니02.png);

  right: 20%;
  bottom: -4rem;
}

/* ======컨텐츠 */
.world__content {
  max-width: 80%;
  margin: 0 auto;
  margin-top: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.world__img {
  flex-basis: 40%;
  height: 400px;
  overflow: hidden;

  display: flex;
  align-items: center;
}
.world__img img {
  width: 100%;
}
.world__text {
  flex-basis: 60%;
  text-align: left;

  padding: 20px;
}
.world__text .world__title {
  font-size: 30px;
}
.world__text .world__des--wrap {
  margin-top: 32px;
}
.world__text .world__des {
  font-size: 20px;
}
.world__text .world__des ~ .world__des {
  margin-top: 20px;
}

/* =============지역 */
.world__area {
  margin: 0 auto;
  width: 80%;
  margin-top: 40px;
}
.world__area .area_list {
  display: flex;
  gap: 20px;
}
.world__area .area_item {
  width: 20%;
}
.world__area .area_item .img-box {
  width: 100%;
  height: 220px;
  overflow: hidden;
}
.world__area .area_item {
  width: calc(20% - 18px);
}
.world__area .area_item .img-box img {
  max-width: 100%;
}
.world__area .area_item {
  width: calc(20% - 18px);
}
.world__area .area_item .area__name {
  font-size: 20px;
  margin-top: 10px;
}

.world__area .area_item .area__eng-name {
}
/* ===================하단 */
.world__bottom {
  margin-top: 60px;
}
.world__bottom .message {
  font-size: 40px;
}
.world__bottom .bottom__btns {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  gap: 20px;
}
.world__bottom .bottom__btns button {
  font-size: 24px;
  padding: 24px 56px;
  background-color: var(--btn-color);
  border-radius: 50px;
  color: #fff;
  font-weight: 700;
}
</style>
