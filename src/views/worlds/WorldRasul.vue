<template>
  <WorldsModal :arrayNumber="3"></WorldsModal>
</template>
<script>
import { worldData } from "@/js/worldData.js";
import WorldsModal from "./WorldsModal";

export default {
  data() {
    return {
      worldContent: worldData,
    };
  },
  components: { WorldsModal },
};
</script>
