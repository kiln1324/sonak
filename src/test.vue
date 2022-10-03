<template></template>

<script>
import { createApp } from "vue";

const app = createApp({
  /* 최상위 컴포넌트 옵션 */
});
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
body {
  font-size: 1.6rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
  width: 24rem;
  height: 100%;
  background-color: lightsalmon;
  position: fixed;
  top: 0;
  left: 0;
}
.aside {
  width: 24rem;
  height: 100%;
  background-color: lightsalmon;
  position: fixed;
  top: 0;
  right: 0;
}
.container {
}
.inner {
  width: calc(100% - 24rem);
  margin: 0 auto;
}
.container section {
  padding: 4rem 0 3rem;
}
.section_name {
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
.section_name::before,
.section_name::after {
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
.section_name::before {
  left: 2.6rem;
}
.section_name::after {
  right: 2.6rem;
}
.container .worlds {
  background-color: pink;
}
.container .charactor {
  background-color: teal;
}
.container .recruit {
  background-color: lightyellow;
}
.container .worlds {
}
.bookshelf {
  width: 106rem;
  height: 78rem;
  background-color: #402218;
  margin: 0 auto;
  margin-top: 2rem;

  display: flex;
}
.bookshelf .line {
  width: 25%;
  height: 100%;
  border: 1px solid #402218;
}
.bookshelf .line ul {
  height: 100%;
}
.bookshelf .line .book_box {
  background-color: pink;
}
.bookshelf .line .book_box button {
  width: 100%;
  height: 100%;
  font-size: 0;
  outline: none;
  border: 0;
  background-color: transparent;
  cursor: pointer;
}

.bookshelf .line .book_box.normal {
  height: 20%;
}
.bookshelf .line .book_box.mini {
  height: 14%;
}
.bookshelf .line .book_box.gaiac {
  height: 52%;
  background: url(./assets/gaiac.png) no-repeat center/contain;
}
.bookshelf .line .book_box.narrabillis {
  height: 74%;
  background: url(./assets/narrabillis.png) no-repeat center/contain;
}
.modal {
  width: 100vw;
  height: 100vh;
  background: #00000050;
  position: fixed;
  padding: 20px;
  z-index: 999999;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
}

.modal_box {
  width: 90%;
  height: 90%;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  text-align: center;

  position: relative;
}
</style>
