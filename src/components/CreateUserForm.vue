<template>
  <template v-if="show">
    <UserForm :isAuth="false" @submitQuery="create" />
  </template>
  <h2 v-else>Вы успешно создали пользователя</h2>
</template>

<script>
import UserForm from "@/components/UserForm.vue";
import useCreateNewUser from "@/composables/useQueryCreateNewUser";

export default {
  components: {
    UserForm,
  },

  setup() {
    const { show, create } = useCreateNewUser();

    return {
      show,
      create,
    };
  },
};
</script>
