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
      newProfile: {
        lastName: "",
        firstName: "",
        middleName: "",
        email: "",
        phoneNumber: "",
      },
    };
  },

  mounted() {
    const profile = localStorage;

    this.fullName(profile.name);

    this.newProfile.email = profile.email;
    this.newProfile.phoneNumber = profile.phoneNumber;
  },

  methods: {
    async createQuery() {
      const { valid } = await this.$refs.form.validate();

      const profile = {
        name: this.fullName(),
        email: this.newProfile.email,
      };

      if (this.isPhone && this.newProfile.phoneNumber) {
        profile.phoneNumber = this.newProfile.phoneNumber;
      }

      if (valid) {
        this.$emit("submitQuery", profile);
      }
    },

    fullName(v) {
      if (v) {
        const names = v.split(" ");

        this.newProfile.lastName = names[0];
        this.newProfile.firstName = names[1];
        this.newProfile.middleName = names[2];
      } else {
        const lastName = this.newProfile.lastName || localStorage.lastName;
        const firstName = this.newProfile.firstName || localStorage.firstName;
        const middleName =
          this.newProfile.middleName || localStorage.middleName;

        return `${lastName} ${firstName} ${middleName}`;
      }
    },
  },
};
</script>
