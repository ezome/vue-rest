<template>
  <UserCreate />
</template>

<script>
import { defineComponent } from "vue";

import UserCreate from "@/components/UserCreate.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    UserCreate,
  },
});
</script>
