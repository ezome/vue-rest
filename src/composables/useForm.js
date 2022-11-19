const fullName = (newProfile, currentProfile) => {
  const lastName = newProfile.lastName || currentProfile.lastName;
  const firstName = newProfile.firstName || currentProfile.lastName;
  const middleName = newProfile.middleName || currentProfile.lastName;

  return `${lastName} ${firstName} ${middleName}`;
};

export function useForm(isPhone, form, newProfile, currentProfile, emit) {
  const createQuery = async () => {
    const { valid } = await form.value.validate();

    const profile = {
      name: fullName(newProfile, currentProfile),
      email: newProfile.email,
    };

    if (isPhone && newProfile.phoneNumber) {
      profile.phoneNumber = newProfile.phoneNumber;
    }

    if (valid) {
      emit("submitQuery", profile);
    }
  };

  return {
    createQuery,
  };
}
