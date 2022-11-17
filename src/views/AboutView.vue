<template>
  <EditUserForm />
</template>

<script>
import { defineComponent } from "vue";

import EditUserForm from "@/components/EditUserForm";

export default defineComponent({
  name: "AboutView",

  components: {
    EditUserForm,
  },
});
</script>
