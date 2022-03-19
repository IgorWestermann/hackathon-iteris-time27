<template>
  <v-container class="login-page">
    <div class="login">
      <h2 class="ml-2">Login</h2>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          class="ml-2 mr-2"
          v-model="email"
          :rules="emailRules"
          label="E-mail"
        ></v-text-field>

        <v-text-field
          class="ml-2 mr-2"
          v-model="email"
          :rules="emailRules"
          label="Senha"
        ></v-text-field>

        <router-link to="/">
          <v-btn color="success" class="mr-4 ml-2" @click="validate">
            Login
          </v-btn>
        </router-link>

        <router-link to="/registervendor">
          <v-btn color="" @click="resetValidation"> Cadastre-se </v-btn>
        </router-link>
      </v-form>

      <v-checkbox
        v-model="checkbox"
        :label="'Manter-me logado'"
        class="ml-2"
      ></v-checkbox>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'SellerLoginPage',
};
</script>

<style scoped>
.login-page a {
  text-decoration: none;
}
</style>
