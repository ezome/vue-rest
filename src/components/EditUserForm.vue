<template>
  <UserForm :isPhone="true" @submitQuery="update" />
</template>

<script>
import UserForm from "@/components/UserForm.vue";
import { useUpdateCurrentUser } from "@/composables/useQueryUpdateCurrentUser";
import { useGetCurrentUser } from "@/composables/useQueryGetCurrentUser";

export default {
  components: {
    UserForm,
  },

  setup() {
    const { update } = useUpdateCurrentUser();

    const { read } = useGetCurrentUser();

    return {
      update,
      read,
    };
  },
};
</script>
