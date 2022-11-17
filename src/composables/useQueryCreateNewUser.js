import { ref, onMounted } from "vue";
import { createNewUserApi } from "@/api/user";

export function useCreateNewUser() {
  const create = async (profile) => {
    try {
      const { data } = await createNewUserApi(profile);

      localStorage.name = data.name;
      localStorage.email = data.email;
      localStorage.token = data["auth_key"];
    } catch (err) {
      alert(err.response?.data?.message);
    }
  };

  const show = ref(false);
  onMounted(() => {
    if (!localStorage.token) show.value = true;
  });

  return {
    show,
    create,
  };
}
