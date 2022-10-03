<template>
  <div class="container">
    <div class="inner">
      <SectionWorld id="worlds" />
      <SectionCharactor id="charactors" />
      <SectionProduct id="products" />
      <SectionAbout id="about" />
    </div>
  </div>
</template>
<script>
import SectionWorld from "./SectionWorld.vue";
import SectionCharactor from "./SectionCharactor.vue";
import SectionProduct from "./SectionProduct.vue";
import SectionAbout from "./SectionAbout.vue";
export default {
  components: { SectionWorld, SectionCharactor, SectionProduct, SectionAbout },
  data() {
    return {};
  },
};
</script>

<style>
.container {
  width: 100%;
}
.container .inner {
  width: calc(100% - 24rem);
  margin: 0 auto;
}
.sections {
  padding: 4rem 0 3rem;
}
.section_title {
  font-size: 2.4rem;
  text-align: center;

  padding: 1.2rem 0;
  width: 24rem;
  margin: 0 auto;
  border-radius: 5rem;
  background-color: #fff;
  box-shadow: 1px 1px 2px coral;

  position: relative;
}

.section_title::before,
.section_title::after {
  content: "";
  display: block;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 0.6rem;
  background-color: pink;

  position: absolute;
  top: calc(50% - 6px);
  box-shadow: inset 1px 1px 1px coral;
}
.section_title::before {
  left: 2.6rem;
}
.section_title::after {
  right: 2.6rem;
}
</style>
