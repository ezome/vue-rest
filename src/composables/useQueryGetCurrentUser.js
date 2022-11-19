import { reactive, onMounted } from "vue";
import { getCurrentUserApi } from "@/api/user";

export function useGetCurrentUser() {
  const profile = reactive({});

  const read = async () => {
    try {
      const { data } = await getCurrentUserApi();

      const [lastName, firstName, middleName] = data?.name?.split(" ");

      profile.lastName = lastName;
      profile.firstName = firstName;
      profile.middleName = middleName;

      profile.name = data.name;
      profile.email = data.email;
      profile.phoneNumber = data.phoneNumber;
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
