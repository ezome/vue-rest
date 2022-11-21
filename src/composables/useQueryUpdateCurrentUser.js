import { updateCurrentUserApi } from "@/api/user";
import UserDto from "@/DTOs/UserDto";

export default function useUpdateCurrentUser(currentProfile) {
  const comparisonProfile = (profile) => {
    const newProfile = {};

    for (let key in UserDto) {
      if (profile[key] !== currentProfile[key]) {
        newProfile[key] = profile[key];
      }
    }

    return newProfile;
  };

  const update = async (profile) => {
    try {
      const newProfile = comparisonProfile(profile);

      await updateCurrentUserApi(newProfile);
    } catch (err) {
      const { statusCode, message } = err?.response?.data;
      alert(`Error ${statusCode}: ${message}`);
    }
  };

  return {
    update,
  };
}
