<template>
  <template v-if="invalid">
    <UserFormComponent :isPhone="false" @submitQuery="create" />
  </template>
  <h2 v-else>Вы уже создали пользователя</h2>
</template>

<script>
import UserFormComponent from "@/components/UserFormComponent.vue";
import { createNewUserApi } from "@/api/user";
import { ref, onMounted } from "vue";

export default {
  components: {
    UserFormComponent,
  },

  setup() {
    const create = async (data) => {
      try {
        const response = await createNewUserApi(data);

        localStorage.name = response.data.name;
        localStorage.email = response.data.email;
        localStorage.token = response.data["auth_key"];
      } catch (err) {
        alert(err.response?.data?.message);
      }
    };

    const invalid = ref(false);
    onMounted(() => {
      if (!localStorage.token) invalid.value = true;
    });

    return {
      invalid,
      create,
    };
  },
};
</script>
