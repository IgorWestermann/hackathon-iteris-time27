<template>
  <v-container class="login-page">
    <h2>Login</h2>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Senha"
      ></v-text-field>

      <router-link to="/">
        <v-btn color="success" class="mr-4" @click="validate"> Login </v-btn>
      </router-link>

      <router-link to="/cadastro">
        <v-btn color="" @click="resetValidation"> Cadastre-se </v-btn>
      </router-link>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "SellerLoginPage",
};
</script>

<style scoped>
.login-page a {
  text-decoration: none;
}
</style>