import { onMounted } from "vue";
import { getCurrentUserApi } from "@/api/user";

export function useGetCurrentUser() {
  const read = async () => {
    try {
      const { data } = await getCurrentUserApi();

      localStorage.name = data.name;
      localStorage.email = data.email;
      localStorage.token = data["auth_key"];
    } catch (err) {
      alert(err.response?.data?.message);
    }
  };

  onMounted(read);

  return {
    read,
  };
}
