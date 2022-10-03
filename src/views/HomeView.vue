<template>
  <div class="home">
    <header class="header">
      <h2 class="logo">
        <svg>
          <ellipse cx="50%" cy="80px" rx="110px" ry="80px" fill="#6767a9" />
          <ellipse cx="50%" cy="80px" rx="100px" ry="70px" fill="url(#grad1)" />
          <defs>
            <radialGradient
              id="grad1"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              <stop offset="86%" style="stop-color: #6767a9; stop-opacity: 0" />
              <stop
                offset="100%"
                style="stop-color: #57579a; stop-opacity: 1"
              />
            </radialGradient>
          </defs>
        </svg>
        <img src="../assets/main/logo.svg" alt="소낙로고" />
      </h2>
      <h1 class="logo_name">
        <a href="#">소낙 공식 웹사이트</a>
        <svg>
          <circle
            cx="0"
            cy="0"
            r="16"
            fill="#6767a9"
            stroke="#dfd782"
            stroke-width="2"
          />
          <circle
            cx="0"
            cy="84"
            r="16"
            fill="#6767a9"
            stroke="#dfd782"
            stroke-width="2"
          />
          <circle
            cx="100%"
            cy="84"
            r="16"
            fill="#6767a9"
            stroke="#dfd782"
            stroke-width="2"
          />
          <circle
            cx="100%"
            cy="0"
            r="16"
            fill="#6767a9"
            stroke="#dfd782"
            stroke-width="2"
          />
        </svg>
      </h1>
    </header>
    <section class="main_content">
      <div class="area_poster">
        <div class="line">
          <img src="../assets/main/lope.png" alt="포스터 줄" />
        </div>
        <a href="#" class="link"
          ><img src="../assets/main/poster.png" alt="소낙 세계관 심리테스트"
        /></a>
      </div>
      <div class="area_door">
        <router-link to="/main" class="move-to-main">
          <p class="click">OPEN</p>
        </router-link>
      </div>
      <div class="area_links">
        <div class="main_book-shelf">
          <div class="top">
            <button type="button" class="main_btn worlds">세계관</button>
            <button type="button" class="main_btn character">주인공</button>
          </div>
          <div class="bottom">
            <a href="#" class="main_btn instar">소낙 인스타그램</a>
            <a href="#" class="main_btn twitter">소낙 트위터</a>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer">
      <p class="copy">Copyright 2022. sonack Co., all rights reserced.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {};
  },
};
</script>

<style>
.home {
  width: 100vw;
  height: 100vh;
  background: url(../assets/main/bg_block.png) no-repeat bottom -3rem center/100%,
    url(../assets/main/pattern.svg) repeat top left/200px;

  background-color: #814638;
  background-color: #a26250;

  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.header {
  padding-top: 1rem;
}
.logo {
  width: 22rem;
  height: 8rem;
  padding: 1rem;
  border-radius: 10rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 5px solid #57579a;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
}
.logo svg {
  width: 100%;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
}

.logo img {
  width: 5rem;
  margin-top: 1.4rem;
  position: relative;
  z-index: 10;
}
.logo_name {
  width: 60%;
  margin: 0 auto;
  height: 10rem;
  color: #fff;
  font-size: 4rem;
  background-color: #6767a9;
  border-radius: 1.4rem;
  padding: 2rem;
  line-height: 1.2;

  position: relative;
  box-shadow: 10px 10px 4px #793b2b80, -10px 10px 4px #793b2b80;
}

.logo_name::after {
  content: "";
  display: block;
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);

  box-shadow: inset 2px 0 0 #dfd782, inset -2px 0 0 #dfd782,
    inset 0 2px 0 #dfd782, inset 0 -2px 0 #dfd782;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 90;
}
.logo_name svg {
  width: 100%;
  height: 100%;
  width: calc(100% - 1.9rem);
  height: calc(100% - 1.9rem);

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
}
.main_content {
  flex-grow: 1;

  display: flex;
  gap: 1rem;
  padding: 0 2rem;
}
.main_content .area_poster,
.main_content .area_door,
.main_content .area_links {
  flex-grow: 1;
  width: 33%;
  position: relative;
}

.main_content .area_poster,
.main_content .area_links {
  height: 76%;
}
.main_content .area_poster:after,
.main_content .area_links::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  background: no-repeat center/100% 100%;
}
.main_content .area_poster:after {
  background-image: url(../assets/main/window_left.png);
}
.main_content .area_links::after {
  background-image: url(../assets/main/window_right.png);
}

/* ======== 포스터 */
.main_content .area_poster {
  padding: 2rem;
  background-color: #643327;
  background-clip: content-box;
}
.main_content .area_poster .line {
  width: 30%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.main_content .area_poster .line img {
  width: 100%;
}
.main_content .area_poster .link {
  width: 50%;
  margin: 0 auto;
  margin-top: 2rem;
}

.main_content .area_poster .link img {
  width: 100%;
}

/* ======== 문 */
.main_content .area_door {
  height: 100%;
}
.main_content .area_door .move-to-main {
  width: 100%;
  height: 100%;
  background: url(../assets/main/door.png) no-repeat center bottom -1rem / auto 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.main_content .area_door .move-to-main .click {
  font-size: 3rem;
  color: #fff;
  margin-top: 40%;

  transform-origin: center;
}

.main_content .area_door .move-to-main:active .click,
.main_content .area_door .move-to-main:hover .click {
  color: #fff;
  animation: waveText 1s;
}

@keyframes waveText {
  0% {
    transform: translateY(4px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
/* ========= 링크 */
.main_content .area_links {
  padding: 2rem;
  background-color: #643327;
  background-clip: content-box;
}
.main_book-shelf {
  height: 100%;
  position: relative;
  padding: 2rem 0;
  margin: 0 6rem;
  background-color: #412319;
  border-left: 3rem solid #a26250;
  border-right: 3rem solid #a26250;
  box-shadow: inset 3rem 0 1rem #00000050, inset -3rem 0 1rem #00000050;
}
.main_book-shelf .top,
.main_book-shelf .bottom {
  display: flex;
  gap: 2rem;
  border-top: 3rem solid #a26250;
  padding: 2rem 4rem 0;
}
.main_book-shelf .bottom {
  border-bottom: 3rem solid #a26250;
}
.main_book-shelf .main_btn {
  width: calc(50% - 1rem);
  height: 14rem;
  padding: 2rem;
  background-color: teal;
  color: #fff;
  font-size: 1rem;
}

/* -=========footer */
.footer {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.copy {
  opacity: 0.7;
  color: #fff;
  font-size: 1.4rem;
  line-height: 1.4rem;
  padding: 1rem 0;
}
</style>
