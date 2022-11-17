import { updateCurrentUserApi } from "@/api/user";

export function useUpdateCurrentUser() {
  const update = async (profile) => {
    try {
      const { data } = await updateCurrentUserApi(profile);

      localStorage.name = data.name;
      localStorage.email = data.email;
      localStorage.phoneNumber = data.phoneNumber;
      localStorage.token = data["auth_key"];
    } catch (err) {
      alert(err.response?.data?.message);
    }
  };

  return {
    update,
  };
}
