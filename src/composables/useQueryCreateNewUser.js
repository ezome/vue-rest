import { ref, onMounted } from "vue";
import { createNewUserApi } from "@/api/user";

export function useCreateNewUser() {
  const show = ref(false);

  const create = async (profile) => {
    try {
      const { data } = await createNewUserApi(profile);

      localStorage.token = data["auth_key"];

      show.value = false;
    } catch (err) {
      const { statusCode, message } = err.response?.data;
      alert(`Error ${statusCode}: ${message}`);
    }
  };

  onMounted(() => {
    if (!localStorage.token) show.value = true;
  });

  return {
    show,
    create,
  };
}
