<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script>
export default {
  components: {},
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
  methods: {
    moveToMain() {
      this.$router.push("/main");
    },
  },
};
</script>

<style>
:root {
  font-size: 62.5%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul,
ol,
li {
  list-style: none;
}
a {
  display: block;
  text-decoration: none;
  color: inherit;
  font-weight: inherit;
  font-size: inherit;
}

button {
  display: block;
  background-color: transparent;
  border: 0;
  color: inherit;
  font-weight: inherit;
  font-size: inherit;
  outline: none;
  cursor: pointer;
}
img,
a {
  -webkit-user-drag: none;
}
body {
  font-size: 1.6rem;
  background-color: #402218;
}

#app {
  font-family: "Hahmlet", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
