<template>
  <v-form ref="form" @submit.prevent="submitQuery" lazy-validation>
    <v-text-field
      v-model.trim="lastName"
      :rules="rules.name"
      label="lastName"
    ></v-text-field>
    <v-text-field
      v-model.trim="firstName"
      :rules="rules.name"
      label="firstName"
    ></v-text-field>
    <v-text-field
      v-model.trim="middleName"
      :rules="rules.nameException"
      label="middleName"
    ></v-text-field>
    <v-text-field
      type="email"
      v-model="newProfile.email"
      :rules="rules.email"
      label="E-mail"
    ></v-text-field>
    <template v-if="isAuth">
      <v-text-field
        type="tel"
        v-maska="'+7 (###) ### ##-##'"
        v-model="newProfile.phoneNumber"
        :rules="rules.phoneNumber"
        label="Phone Number"
      ></v-text-field>
    </template>
    <v-btn class="mr-4" type="submit">submit</v-btn>
  </v-form>
</template>

<script>
import useFormRules from "@/composables/useFormRules";
import useFormConvert from "@/composables/useFormConvert";
import useForm from "@/composables/useForm";

export default {
  props: {
    isAuth: Boolean,
    profile: {
      type: Object,
      default() {
        return {
          name: "",
          email: "",
        };
      },
    },
  },

  setup(props, context) {
    const { lastName, firstName, middleName, newProfile } = useFormConvert(
      props.profile
    );

    const { rules } = useFormRules(props.isAuth);

    const { form, submitQuery } = useForm(newProfile, context.emit);

    return {
      lastName,
      firstName,
      middleName,
      form,
      rules,
      newProfile,
      submitQuery,
    };
  },
};
</script>
