<template>
  <UserForm :isAuth="true" :profile="profile" @submitQuery="update" />
</template>

<script>
import UserForm from "@/components/UserForm.vue";
import useUpdateCurrentUser from "@/composables/useQueryUpdateCurrentUser";
import useGetCurrentUser from "@/composables/useQueryGetCurrentUser";

export default {
  components: {
    UserForm,
  },

  setup() {
    const { profile, read } = useGetCurrentUser();

    const { update } = useUpdateCurrentUser(profile);

    return {
      profile,
      read,
      update,
    };
  },
};
</script>
