import { reactive, onMounted } from "vue";
import { getCurrentUserApi } from "@/api/user";
import UserDto from "@/DTOs/UserDto";

export default function useGetCurrentUser() {
  const profile = reactive({});

  const read = async () => {
    try {
      const { data } = await getCurrentUserApi();

      for (let key in UserDto) {
        profile[key] = data[key] || "";
      }
    } catch (err) {
      const { statusCode, message } = err.response?.data;
      alert(`Error ${statusCode}: ${message}`);
    }
  };

  onMounted(read);

  return {
    profile,
    read,
  };
}
