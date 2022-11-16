<template>
  <v-form ref="form" @submit.prevent="createQuery" lazy-validation>
    <v-text-field
      v-model="name"
      :counter="30"
      :rules="[
        (v) => isPhone || v.length !== 0 || 'Обязательно к заполнению',
        (v) => v.length < 30 || 'Вы превысили максимальное количество символов',
      ]"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      type="email"
      v-model="email"
      :rules="[(v) => /.+@.+/i.test(v) || 'Некорректный email']"
      label="E-mail"
      required
    ></v-text-field>
    <template v-if="isPhone">
      <v-text-field
        type="tel"
        v-maska="'+7 (###) ### ##-##'"
        v-model="phoneNumber"
        label="Phone Number"
        required
      ></v-text-field>
    </template>
    <v-btn class="mr-4" type="submit">submit</v-btn>
  </v-form>
</template>

<script>
export default {
  props: {
    isPhone: Boolean,
  },

  data() {
    return {
      name: "",
      email: "",
      phoneNumber: "",
      invalid: false,
    };
  },

  methods: {
    async createQuery() {
      const { valid } = await this.$refs.form.validate();

      const data = {
        name: this.name,
        email: this.email,
      };

      if (this.phoneNumber) data.phoneNumber = this.phoneNumber;

      if (valid) {
        this.$emit("submitQuery", data);
      }
    },
  },
};
</script>
