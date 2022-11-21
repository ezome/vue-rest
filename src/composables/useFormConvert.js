import { reactive, ref, computed, watch } from "vue";
import UserDto from "@/DTOs/UserDto";

export default function useFormConvert(profile) {
  const lastName = ref("");
  const firstName = ref("");
  const middleName = ref("");

  const nameDefault = {
    lastName: "",
    firstName: "",
  };

  const name = computed({
    get: () => {
      const lastN = lastName.value || nameDefault.lastName;
      const firstN = firstName.value || nameDefault.firstName;
      const middleN = middleName.value || "";

      return `${lastN} ${firstN} ${middleN}`.trim();
    },
    set: (val) => {
      const [lastN, firstN, middleN] = val?.split(" ");

      nameDefault.lastName = lastN;
      nameDefault.firstName = firstN;

      lastName.value = lastN;
      firstName.value = firstN;
      middleName.value = middleN;
    },
  });

  const newProfile = reactive({
    name,
  });

  watch(
    () => profile.name,
    () => {
      for (let key in UserDto) {
        key === "name"
          ? (name.value = profile[key])
          : (newProfile[key] = profile[key]);
      }
    }
  );

  return {
    lastName,
    firstName,
    middleName,
    newProfile,
  };
}
