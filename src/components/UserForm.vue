<template>
  <v-form ref="form" @submit.prevent="createQuery" lazy-validation>
    <v-text-field
      v-model.trim="newProfile.lastName"
      :rules="rules.name"
      label="lastName"
    ></v-text-field>
    <v-text-field
      v-model.trim="newProfile.firstName"
      :rules="rules.name"
      label="firstName"
    ></v-text-field>
    <v-text-field
      v-model.trim="newProfile.middleName"
      :rules="rules.name"
      label="middleName"
    ></v-text-field>
    <v-text-field
      type="email"
      v-model="newProfile.email"
      :rules="rules.email"
      label="E-mail"
    ></v-text-field>
    <template v-if="isPhone">
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
import { useFormRules } from "@/composables/useFormRules";
import { useFormValues } from "@/composables/useFormValues";
import { useForm } from "@/composables/useForm";

export default {
  props: {
    isPhone: Boolean,
    profile: Object,
  },

  setup(props, context) {
    const { form, newProfile, currentProfile } = useFormValues(props.profile);

    const { rules } = useFormRules(props.isPhone);

    const { createQuery } = useForm(
      form,
      newProfile,
      currentProfile,
      context.emit
    );

    return {
      form,
      rules,
      newProfile,
      createQuery,
    };
  },
};
</script>
