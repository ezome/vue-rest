<template>
  <UserProfile />
</template>

<script>
import { defineComponent } from "vue";

import UserProfile from "@/components/UserProfile";

export default defineComponent({
  name: "AboutView",

  components: {
    UserProfile,
  },
});
</script>
