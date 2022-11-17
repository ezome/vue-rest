<template>
  <v-form ref="form" @submit.prevent="createQuery" lazy-validation>
    <v-text-field
      v-model="newProfile.lastName"
      :rules="rules.name"
      label="lastName"
    ></v-text-field>
    <v-text-field
      v-model="newProfile.firstName"
      :rules="rules.name"
      label="firstName"
    ></v-text-field>
    <v-text-field
      v-model="newProfile.middleName"
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
      newProfile: {},
    };
  },

  computed: {
    fullName: {
      get() {
        const lastName =
          this.newProfile.lastName || this.currentProfile.lastName;
        const firstName =
          this.newProfile.firstName || this.currentProfile.firstName;
        const middleName =
          this.newProfile.middleName || this.currentProfile.middleName;

        return `${lastName.trim()} ${firstName.trim()} ${middleName.trim()}`;
      },
      set(newValue) {
        const names = newValue.split(" ");

        this.newProfile.lastName = names[0];
        this.newProfile.firstName = names[1];
        this.newProfile.middleName = names[2];
      },
    },
  },

  mounted() {
    const names = localStorage.name.split(" ");

    const profile = {};

    profile.lastName = names[0];
    profile.firstName = names[1];
    profile.middleName = names[2];

    profile.email = localStorage.email;
    profile.phoneNumber = localStorage.phoneNumber;

    this.newProfile = this.currentProfile = profile;
  },

  methods: {
    async createQuery() {
      const { valid } = await this.$refs.form.validate();

      const profile = {
        name: this.fullName,
        email: this.newProfile.email,
      };

      if (this.isPhone && this.newProfile.phoneNumber) {
        profile.phoneNumber = this.newProfile.phoneNumber;
      }

      if (valid) {
        this.$emit("submitQuery", profile);
      }
    },
  },
};
</script>
