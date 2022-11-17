<template>
  <CreateUserForm />
</template>

<script>
import { defineComponent } from "vue";

import CreateUserForm from "@/components/CreateUserForm.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    CreateUserForm,
  },
});
</script>
