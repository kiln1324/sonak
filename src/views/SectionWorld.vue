<template>
  <section class="sections worlds">
    <h2 class="section_title">세계관</h2>
    <ul class="book_shelf">
      <li class="line">
        <ul class="line__item">
          <li class="book_box normal"></li>
          <li class="book_box mini before"></li>
          <li class="book_box gaiac">
            <router-link to="/gaiac" @click="ShowModal">
              <h3 class="box_title">가대륙</h3>
              <p class="first_shelf"></p>
              <p class="second_shelf"></p>
            </router-link>
          </li>
          <li class="book_box mini after"></li>
        </ul>
      </li>
      <li class="line">
        <ul class="line__item">
          <li class="book_box mini before"></li>

          <li class="book_box narrabillis">
            <router-link to="/narrabillis" @click="ShowModal">
              <h3 class="box_title">나라빌리스</h3>
              <p class="first_shelf"></p>
              <p class="second_shelf"></p>
              <p class="third_shelf"></p>
            </router-link>
          </li>
        </ul>
      </li>
      <li class="line">
        <ul class="line__item">
          <li class="book_box datum">
            <router-link to="/datum" @click="ShowModal">
              <h3 class="box_title">다툼</h3>
              <p class="first_shelf"></p>
              <p class="second_shelf"></p>
            </router-link>
          </li>
          <li class="book_box rasul">
            <router-link to="/rasul" @click="ShowModal">
              <h3 class="box_title">라설</h3>
              <p class="first_shelf"></p>
              <p class="second_shelf"></p>
            </router-link>
          </li>
        </ul>
      </li>
      <li class="line">
        <ul class="line__item">
          <li class="book_box normal before"></li>
          <li class="book_box last-continent">
            <router-link to="/last-continent" @click="ShowModal">
              <h3 class="box_title">마지막대륙</h3>
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

<style>
/* =================================가대륙 */
.book_shelf .line .gaiac {
  height: 52%;
  border-width: 2rem 0 !important;
}

.book_shelf .line .gaiac::before,
.book_shelf .line .gaiac::after {
  background-color: #65291c;
}

.book_shelf .line .gaiac:hover {
  background-color: #31140f;
  border-color: #411b13;
}
.book_shelf .line .gaiac .box_title {
  background: url(../assets/bookshelf-title_gaiac.png) no-repeat center/100%;
}
.book_shelf .line .gaiac p {
  background: no-repeat center top/100%;
  height: 50%;
}
.book_shelf .line .gaiac .first_shelf {
  background: no-repeat left calc(100% + 2.4rem) / 96%;
  background-image: url(../assets/bookshelf-item_gaiac01.png);
  border-bottom: 1rem solid #443435;
}
.book_shelf .line .gaiac:hover .first_shelf {
  border-color: #411b13;
  background-image: url(../assets/bookshelf-item_gaiac01--active.png);
}
.book_shelf .line .gaiac .second_shelf {
  background: no-repeat center calc(100% + 2rem) / auto 100%;
  border-top: 1rem solid #443435;
  background-image: url(../assets/bookshelf-item_gaiac02.png);
}
.book_shelf .line .gaiac:hover .second_shelf {
  border-color: #411b13;
  background-image: url(../assets/bookshelf-item_gaiac02--active.png);
}
/* =================================나라빌리스 */
.book_shelf .line .narrabillis {
  height: 86%;
  border-width: 2rem 0 !important;
}

.book_shelf .line .narrabillis::before,
.book_shelf .line .narrabillis::after {
  background-color: #4f2615;
}

.book_shelf .line .narrabillis:hover {
  background-color: #3c1c11;
  border-color: #7a3c1f;
}
.book_shelf .line .narrabillis .box_title {
  background: url(../assets/bookshelf-title_narrabillis.png) no-repeat
    center/100%;
}

/* ========책장 */
.book_shelf .line .narrabillis p {
  background: no-repeat bottom/auto 96%;
}
.book_shelf .line .narrabillis .first_shelf {
  height: 26%;
  background-image: url(../assets/bookshelf-item_narrabillis01.png);
  border-bottom: 1rem solid #443435;
}

.book_shelf .line .narrabillis .second_shelf {
  height: 34%;
  border: 1rem solid #443435;
  border-width: 1rem 0;
  background-image: url(../assets/bookshelf-item_narrabillis02.png);
}
.book_shelf .line .narrabillis .third_shelf {
  height: 40%;
  border-top: 1rem solid #443435;

  background-image: url(../assets/bookshelf-item_narrabillis03.png);
}

/* ======:hover */
.book_shelf .line .narrabillis:hover p {
  border-color: #7a3c1f;
}
.book_shelf .line .narrabillis:hover .first_shelf {
  background-image: url(../assets/bookshelf-item_narrabillis01--active.png);
}
.book_shelf .line .narrabillis:hover .second_shelf {
  background-image: url(../assets/bookshelf-item_narrabillis02--active.png);
}

.book_shelf .line .narrabillis:hover .third_shelf {
  background-image: url(../assets/bookshelf-item_narrabillis03--active.png);
}

/* =================================다툼 */
.book_shelf .line .datum {
  border-bottom-width: 2rem !important;
  height: 46%;
}

.book_shelf .line .datum::before,
.book_shelf .line .datum::after {
  background-color: #4e2e1c;
}

.book_shelf .line .datum:hover {
  background-color: #26160f;
  border-color: #311d13;
}
.book_shelf .line .datum .box_title {
  background: url(../assets/bookshelf-title_datum.png) no-repeat center/100%;
}

/* ========책장 */
.book_shelf .line .datum p {
  height: 50%;
}
.book_shelf .line .datum .first_shelf {
  background: no-repeat 10% calc(100% + 1rem) / 60%;

  background-image: url(../assets/bookshelf-item_datum02.png);
  border-bottom: 1rem solid #443435;

  position: relative;
}

.book_shelf .line .datum .first_shelf::before,
.book_shelf .line .datum .first_shelf::after {
  content: "";
  display: block;

  position: absolute;
}
.book_shelf .line .datum .first_shelf::before {
  width: 128%;
  height: 200%;
  background: url(../assets/bookshelf-item_datum01.png) no-repeat top/100%;
  top: -4rem;
  left: -12%;
  z-index: 29;
}
.book_shelf .line .datum .first_shelf::after {
  width: 40%;
  height: 170%;
  background: url(../assets/bookshelf-item_datum03.png) no-repeat top/auto 100%;
  z-index: 28;
  top: 0;
  right: 4%;
}

.book_shelf .line .datum .second_shelf {
  border-top: 1rem solid #443435;
  background: no-repeat bottom/100%;
  background-image: url(../assets/bookshelf-item_datum04.png);
}

/* ======:hover */
.book_shelf .line .datum:hover p {
  border-color: #7a3c1f;
}
.book_shelf .line .datum:hover .first_shelf {
  background-image: url(../assets/bookshelf-item_datum02--active.png);
}
.book_shelf .line .datum:hover .first_shelf::before {
  background-image: url(../assets/bookshelf-item_datum01--active.png);
}
.book_shelf .line .datum:hover .first_shelf::after {
  background-image: url(../assets/bookshelf-item_datum03--active.png);
}

.book_shelf .line .datum:hover .second_shelf {
  background-image: url(../assets/bookshelf-item_datum04--active.png);
}

/* =================================라설 */
.book_shelf .line .rasul {
  border-top-width: 2rem !important;
  height: 54%;
}

.book_shelf .line .rasul::before,
.book_shelf .line .rasul::after {
  background-color: #473422;
}

.book_shelf .line .rasul:hover {
  background-color: #221812;
  border-color: #2d2117;
}
.book_shelf .line .rasul .box_title {
  background: url(../assets/bookshelf-title_rasul.png) no-repeat center/100%;

  /* top: 48%; */
}

/* ========책장 */

.book_shelf .line .rasul .first_shelf {
  height: 48%;

  background: no-repeat center calc(100% + 0.4rem) / 96%;
  background-image: url(../assets/bookshelf-item_rasul01.png);
  border-bottom: 1rem solid #443435;
}

.book_shelf .line .rasul .second_shelf {
  height: 52%;
  border-top: 1rem solid #443435;
  background: no-repeat right calc(100% + 1rem) / 94%;
  background-image: url(../assets/bookshelf-item_rasul02.png);
}

/* ======:hover */
.book_shelf .line .rasul:hover p {
  border-color: #2d2117;
}
.book_shelf .line .rasul:hover .first_shelf {
  background-image: url(../assets/bookshelf-item_rasul01--active.png);
}

.book_shelf .line .rasul:hover .second_shelf {
  background-image: url(../assets/bookshelf-item_rasul02--active.png);
}

/* =================================마지막대륙 */
.book_shelf .line .last-continent {
  height: 46%;
  border-width: 2rem 0 !important;
}

.book_shelf .line .last-continent::before,
.book_shelf .line .last-continent::after {
  background-color: #311d14;
}

.book_shelf .line .last-continent:hover {
  background-color: #261510;
  border-color: #4d2d1d;
}
.book_shelf .line .last-continent .box_title {
  background: url(../assets/bookshelf-title_last-continent.png) no-repeat
    center/100%;

  /* top: 48%; */
}

/* ========책장 */

.book_shelf .line .last-continent .first_shelf {
  height: 46%;
  background: no-repeat center calc(100% + 0.4rem) / auto 96%;
  background-image: url(../assets/bookshelf-item_last-continent01.png);
  border-bottom: 1rem solid #443435;
}

.book_shelf .line .last-continent .second_shelf {
  height: 54%;
  border-top: 1rem solid #443435;
  background: no-repeat bottom / auto 100%;
  background-image: url(../assets/bookshelf-item_last-continent02.png);
}

/* ======:hover */
.book_shelf .line .last-continent:hover p {
  border-color: #4d2d1d;
}
.book_shelf .line .last-continent:hover .first_shelf {
  background-image: url(../assets/bookshelf-item_last-continent01--active.png);
}

.book_shelf .line .last-continent:hover .second_shelf {
  background-image: url(../assets/bookshelf-item_last-continent02--active.png);
}
</style>
