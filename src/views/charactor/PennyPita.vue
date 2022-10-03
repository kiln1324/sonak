<template>
  <CharactorModal :arrayNumber="2"></CharactorModal>
</template>
<script>
import { charactorData } from "@/js/charactorData.js";
import CharactorModal from "./CharactorModal";

export default {
  data() {
    return {
      charactorContent: charactorData,
    };
  },
  components: { CharactorModal },
};
</script>
