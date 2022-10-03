import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import MainView from "@/views/mainView.vue";
import WorldGaiac from "@/views/worlds/WorldGaiac.vue";
import WorldNarrabillis from "@/views/worlds/WorldNarrabillis.vue";
import WorldDatum from "@/views/worlds/WorldDatum.vue";
import WorldRasul from "@/views/worlds/WorldRasul.vue";
import WorldLastContinent from "@/views/worlds/WorldLastContinent.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
  {
    path: "/main",
    name: "MainView",
    component: MainView,
    children: [
      {
        path: "/gaiac",
        name: "gaiac",
        component: WorldGaiac,
      },
      {
        path: "/narrabillis",
        name: "narrabillis",
        component: WorldNarrabillis,
      },
      {
        path: "/datum",
        name: "datum",
        component: WorldDatum,
      },
      {
        path: "/rasul",
        name: "rasul",
        component: WorldRasul,
      },
      {
        path: "/last-continent",
        name: "last-continent",
        component: WorldLastContinent,
      },
      {
        path: "/AairanJostina",
        name: "AairanJostina",
        component: () => import("@/views/charactor/AairanJostina.vue"),
      },
      {
        path: "/PennyPita",
        name: "PennyPita",
        component: () => import("@/views/charactor/PennyPita.vue"),
      },
      {
        path: "/RuVirtanen",
        name: "RuVirtanen",
        component: () => import("@/views/charactor/RuVirtanen.vue"),
      },
      {
        path: "/LiatrisDelAlbens",
        name: "LiatrisDelAlbens",
        component: () => import("@/views/charactor/LiatrisDelAlbens.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
