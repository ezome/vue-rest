<template>
  <v-form ref="form" @submit.prevent="createQuery" lazy-validation>
    <v-text-field
      v-model="newProfile.lastName"
      :rules="rules.name"
      :placeholder="currentProfile.lastName"
      label="lastName"
    ></v-text-field>
    <v-text-field
      v-model="newProfile.firstName"
      :rules="rules.name"
      :placeholder="currentProfile.lastName"
      label="firstName"
    ></v-text-field>
    <v-text-field
      v-model="newProfile.middleName"
      :rules="rules.name"
      :placeholder="currentProfile.lastName"
      label="middleName"
    ></v-text-field>
    <v-text-field
      type="email"
      v-model="newProfile.email"
      :rules="rules.email"
      :placeholder="currentProfile.lastName"
      label="E-mail"
    ></v-text-field>
    <template v-if="isPhone">
      <v-text-field
        type="tel"
        v-maska="'+7 (###) ### ##-##'"
        v-model="newProfile.phoneNumber"
        :rules="rules.phoneNumber"
        :placeholder="currentProfile.lastName"
        label="Phone Number"
      ></v-text-field>
    </template>
    <v-btn class="mr-4" type="submit">submit</v-btn>
  </v-form>
</template>

<script>
import { useFormRules } from "@/composables/useFormRules";

export default {
  props: {
    isPhone: Boolean,
  },

  setup(props) {
    const { rules } = useFormRules(props.isPhone);

    return {
      rules,
    };
  },

  data() {
    return {
      currentProfile: {
        lastName: "",
        firstName: "",
        middleName: "",
        email: "",
        phoneNumber: "",
      },
      newProfile: {
        lastName: "",
        firstName: "",
        middleName: "",
        email: "",
        phoneNumber: "",
      },
    };
  },

  computed: {
    fullName() {
      return `${this.newProfile.lastName.trim()} ${this.newProfile.firstName.trim()} ${this.newProfile.middleName.trim()}`;
    },
  },

  methods: {
    async createQuery() {
      const { valid } = await this.$refs.form.validate();

      const profile = {
        name: this.fullName,
        email: this.email,
      };

      if (this.phoneNumber) profile.phoneNumber = this.phoneNumber;

      /*

        при отсутствии некоторых полей name брать из полученного и распарсенного с сервера и формировать fullName
        можно пройти циклом по name: { last: "", first: "", middle: "" }
      
      */

      if (valid) {
        this.$emit("submitQuery", profile);
      }
    },
  },
};
</script>
