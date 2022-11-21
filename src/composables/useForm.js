import { ref } from "vue";

export default function useForm(newProfile, emit) {
  const form = ref(null);

  const submitQuery = async () => {
    const { valid } = await form.value.validate();

    if (valid) {
      emit("submitQuery", newProfile);
    }
  };

  return {
    form,
    submitQuery,
  };
}
