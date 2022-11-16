<template>
  <UserFormComponent :isPhone="true" @submitQuery="update" />
</template>

<script>
import UserFormComponent from "@/components/UserFormComponent.vue";
import { updateCurrentUserApi } from "@/api/user";

export default {
  components: {
    UserFormComponent,
  },

  setup() {
    const update = async (data) => {
      try {
        const response = await updateCurrentUserApi(data);

        localStorage.name = response.data.name;
        localStorage.email = response.data.email;
        localStorage.phoneNumber = response.data.phoneNumber;
        localStorage.token = response.data["auth_key"];

        console.log(response);
      } catch (err) {
        alert(err.response?.data?.message);
      }
    };

    return {
      update,
    };
  },
};
</script>
