import { updateCurrentUserApi } from "@/api/user";

export function useUpdateCurrentUser() {
  const update = async (profile) => {
    try {
      await updateCurrentUserApi(profile);
    } catch (err) {
      const { statusCode, message } = err?.response?.data;
      alert(`Error ${statusCode}: ${message}`);
    }
  };

  return {
    update,
  };
}
