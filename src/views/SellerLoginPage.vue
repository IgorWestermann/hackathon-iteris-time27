<template>
  <v-container class="login-page">
    <v-card elevation="2">
      <AppBar />
      <div class="login">
        <h2 class="ml-2 page-title">Login</h2>
        <v-form ref="form">
          <v-text-field class="ml-2 mr-2" label="E-mail"> </v-text-field>
          <v-text-field
            class="ml-2 mr-2"
            type="password"
            label="Senha"
          ></v-text-field>

          <div>
            <router-link to="/newproduct">
              <v-btn
                rounded
                color="deep-purple lighten-2"
                class="mr-4 ml-2"
                dark
              >
                Login
              </v-btn>
            </router-link>

            <router-link to="/registervendor">
              <v-btn rounded color="deep-purple lighten-2 " dark>
                Cadastre-se
              </v-btn>
            </router-link>
          </div>
        </v-form>

        <v-checkbox :label="'Manter-me logado'" class="ml-2"></v-checkbox>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import AppBar from '../components/AppBar.vue';

export default {
  name: 'SellerLoginPage',
  components: { AppBar },
};
</script>

<style scoped>
.login-page {
  margin-top: 50%;
}
.register-page-btns {
  display: flex;
  justify-content: space-around;
}

.login-page a {
  text-decoration: none;
}

.page-title {
  color: #9575cd;
}
</style>
