<template>
  <div class="main_container">
    <HeaderMenu />

    <SectionView></SectionView>

    <div class="modal" :class="{ active: showHide }">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderMenu from "@/views/HeaderMenu.vue";
import SectionView from "@/views/SectionView.vue";
export default {
  name: "MainView",
  components: { HeaderMenu, SectionView },
  data() {
    return {};
  },
  computed: {
    showHide() {
      return this.$store.state.modalState;
    },
    modalNumber() {
      return this.$store.state.modalNumber;
    },
  },
  methods: {},
};
</script>

<style>
.modal {
  width: 100vw;
  height: 100vh;
  background-color: #00000000;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 100%;
  left: 0;

  z-index: 990;
  transition: all 0.5s;
}
.modal.active {
  top: 0;
  background-color: #00000080;
}
</style>
