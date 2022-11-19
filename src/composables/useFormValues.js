import { reactive, ref, watchEffect } from "vue";

export function useFormValues(profile) {
  const form = ref(null);

  const newProfile = reactive(profile);
  const currentProfile = {};

  watchEffect(() => {
    currentProfile.lastName = profile.lastName;
    currentProfile.firstName = profile.firstName;
    currentProfile.middleName = profile.middleName;
  });

  return {
    form,
    newProfile,
    currentProfile,
  };
}
